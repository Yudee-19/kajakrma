"use client";
import { useState, useCallback } from "react";
import {
    ReactFlow,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const initialNodes = [
    { id: "n0", position: { x: 62, y: 0 }, data: { label: "Node 0" } },
    { id: "n1", position: { x: 25, y: 100 }, data: { label: "Node 1" } },
    { id: "n2", position: { x: 50, y: 100 }, data: { label: "Node 2" } },
    { id: "n3", position: { x: 75, y: 100 }, data: { label: "Node 3" } },
    { id: "n4", position: { x: 100, y: 100 }, data: { label: "Node 4" } },
];
const initialEdges = [
    { id: "n0-n1", source: "n0", target: "n1", animated: true },
    { id: "n0-n2", source: "n0", target: "n2", animated: true },
    { id: "n0-n3", source: "n0", target: "n3", animated: true },
    { id: "n0-n4", source: "n0", target: "n4", animated: true },
];

export default function Node() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes: any) =>
            setNodes((nodesSnapshot) =>
                applyNodeChanges(changes, nodesSnapshot)
            ),
        []
    );
    const onEdgesChange = useCallback(
        (changes: any) =>
            setEdges((edgesSnapshot) =>
                applyEdgeChanges(changes, edgesSnapshot)
            ),
        []
    );
    const onConnect = useCallback(
        (params: any) =>
            setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        []
    );

    return (
        <div className="bg-red-400" style={{ width: "100vw", height: "50vh" }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            />
        </div>
    );
}
