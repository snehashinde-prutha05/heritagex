import { useMemo, useState } from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
import { useNavigate } from 'react-router-dom';
import data from '../data/knowledgeGraph.json';
const base = { borderRadius: 999, fontWeight: 600, padding: '8px 18px', border: '1px solid #e4e4ea', background: '#fafafa', color: '#2b2b2e' };
// Click a state to show its traditions. Click a tradition to open its page.
export default function KnowledgeGraph() {
  const [sel, setSel] = useState(null);
  const nav = useNavigate();
  const { nodes, edges } = useMemo(() => {
    const n = [{ id: 'india', position: { x: 300, y: 0 }, data: { label: 'India' }, style: { ...base, background: 'linear-gradient(90deg,#ff5f7e,#ffa14a)', color: '#fff', border: 'none' } }];
    const e = [];
    data.states.forEach((s, i) => {
      n.push({ id: s.id, position: { x: i * 260, y: 100 }, data: { label: s.label }, style: { ...base, borderColor: sel === s.id ? '#ff5f7e' : '#e4e4ea' } });
      e.push({ id: `i-${s.id}`, source: 'india', target: s.id });
      if (sel === s.id) s.traditions.forEach((t, j) => {
        const id = `${s.id}-${t.label}`;
        n.push({ id, position: { x: i * 260, y: 200 + j * 56 }, data: { label: t.to ? t.label : `${t.label} (coming soon)`, to: t.to }, style: { ...base, background: '#eceef5', fontWeight: 500, cursor: t.to ? 'pointer' : 'default' } });
        e.push({ id: `e-${id}`, source: s.id, target: id });
      });
    });
    return { nodes: n, edges: e };
  }, [sel]);
  const onNodeClick = (_, node) => {
    if (data.states.some((s) => s.id === node.id)) setSel(sel === node.id ? null : node.id);
    else if (node.data.to) nav(node.data.to);
  };
  return (
    <div className="h-[440px] overflow-hidden rounded-2xl border border-line bg-card shadow-soft">
      <ReactFlow key={sel} nodes={nodes} edges={edges} onNodeClick={onNodeClick} fitView nodesDraggable={false} nodesConnectable={false}
        zoomOnScroll={false} panOnDrag={false} preventScrolling={false} />
    </div>
  );
}
