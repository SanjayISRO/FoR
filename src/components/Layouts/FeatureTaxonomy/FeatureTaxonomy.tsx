import { PieChart, Pie, Cell, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useState, useEffect } from 'react';
import styles from './FeatureTaxonomy.module.css';

const FeatureTaxonomy = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/Output.json')
      .then(response => response.json())
      .then(outputData => {
        setData(outputData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading data:', error);
        setLoading(false);
      });
  }, []);

  if (loading || !data) {
    return <div className={styles.container}>Loading...</div>;
  }

  const totalConversations = data.clusters.reduce((total, cluster) => total + cluster.No_of_conversations, 0);

  // Calculate cluster distribution
  const clusterData = data.clusters.map(cluster => ({
    name: cluster.cluster_name,
    value: cluster.No_of_conversations,
    percentage: ((cluster.No_of_conversations / totalConversations) * 100).toFixed(1)
  }));

  // Aggregate feature data for bar charts
  const aggregateFeatures = (featureName) => {
    const aggregated = { low: 0, medium: 0, high: 0 };
    data.clusters.forEach(cluster => {
      if (cluster.features[featureName]) {
        aggregated.low += cluster.features[featureName].low || 0;
        aggregated.medium += cluster.features[featureName].medium || 0;
        aggregated.high += cluster.features[featureName].high || 0;
      }
    });
    return Object.entries(aggregated).map(([key, value]) => ({ name: key, value }));
  };

  // Aggregate segment data
  const segmentData = data.clusters.reduce((acc, cluster) => {
    Object.entries(cluster.features.segment).forEach(([key, value]) => {
      acc[key] = (acc[key] || 0) + value;
    });
    return acc;
  }, {});

  const totalSegments = Object.values(segmentData).reduce((sum, value) => sum + value, 0);
  const segmentChartData = Object.entries(segmentData).map(([name, value]) => ({
    name,
    value,
    percentage: ((value / totalSegments) * 100).toFixed(1)
  }));

  // Stage data
  const totalStages = Object.values(data.stage).reduce((sum, value) => sum + value, 0);
  const stageChartData = Object.entries(data.stage).map(([name, value]) => ({
    name,
    value,
    percentage: ((value / totalStages) * 100).toFixed(1)
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF7C7C', '#8DD1E1', '#D084D0', '#87D068', '#FFA07A', '#20B2AA', '#FFB6C1'];
  const BAR_COLORS = { low: '#82CA9D', medium: '#FFBB28', high: '#FF8042' };

  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Feature Taxonomy Analysis</h4>
      <p className={styles.description}>
        Analyze the distribution of customer intents across clusters and their high-priority attribute mapping.
      </p>
      <div className={styles.analysisNote}>
        <div className={styles.noteContent}>
          <img src="/src/assets/images/sidebar_checkbox.png" alt="analysis icon" className={styles.noteIcon} />
          <p>Analysis complete: Analyzed {totalConversations} total conversations across {data.clusters.length} clusters. Review the distribution and feature analysis below.</p>
        </div>
      </div>
      
      {/* Top Row: Cluster Distribution + Bar Charts */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: '1', backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '15px', color: '#172950' }}>Cluster Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={clusterData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ percentage }) => `${percentage}%`}
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
              >
                {clusterData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px', fontSize: '14px', justifyContent: 'center' }}>
            {clusterData.map((entry, index) => (
              <div key={entry.name} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: COLORS[index % COLORS.length] }}></div>
                <span>{entry.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: '1', backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '15px', color: '#172950' }}>Feature Distribution</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={[
              { name: 'Revenue Potential', low: aggregateFeatures('revenue_potential')[0].value, medium: aggregateFeatures('revenue_potential')[1].value, high: aggregateFeatures('revenue_potential')[2].value },
              { name: 'Urgency', low: aggregateFeatures('urgency')[0].value, medium: aggregateFeatures('urgency')[1].value, high: aggregateFeatures('urgency')[2].value },
              { name: 'Complexity', low: aggregateFeatures('complexity')[0].value, medium: aggregateFeatures('complexity')[1].value, high: aggregateFeatures('complexity')[2].value },
              { name: 'Risk Compliance', low: aggregateFeatures('risk_compliance')[0].value, medium: aggregateFeatures('risk_compliance')[1].value, high: aggregateFeatures('risk_compliance')[2].value },
              { name: 'Customer Effort', low: aggregateFeatures('customer_effort')[0].value, medium: aggregateFeatures('customer_effort')[1].value, high: aggregateFeatures('customer_effort')[2].value }
            ]} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} label={{ value: 'Conversations', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} />
              <Tooltip />
              <Bar dataKey="low" stackId="a" fill="#82CA9D" name="Low" />
              <Bar dataKey="medium" stackId="a" fill="#FFBB28" name="Medium" />
              <Bar dataKey="high" stackId="a" fill="#FF8042" name="High" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#82CA9D' }}></div>
              <span style={{ fontSize: '14px' }}>Low</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#FFBB28' }}></div>
              <span style={{ fontSize: '14px' }}>Medium</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#FF8042' }}></div>
              <span style={{ fontSize: '14px' }}>High</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Segment + Stage Pie Charts */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: '1', backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '15px', color: '#172950' }}>Segment Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={segmentChartData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ percentage }) => `${percentage}%`}
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
              >
                {segmentChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px', fontSize: '14px', justifyContent: 'center' }}>
            {segmentChartData.map((entry, index) => (
              <div key={entry.name} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: COLORS[index % COLORS.length] }}></div>
                <span>{entry.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: '1', backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '15px', color: '#172950' }}>Stage Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={stageChartData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ percentage }) => `${percentage}%`}
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
              >
                {stageChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px', fontSize: '14px', justifyContent: 'center' }}>
            {stageChartData.map((entry, index) => (
              <div key={entry.name} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: COLORS[index % COLORS.length] }}></div>
                <span>{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTaxonomy;