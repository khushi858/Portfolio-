import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Biometric Multi-Currency dApp",
      desc: "Decentralized app with face authentication, MetaMask wallet, and batch crypto transfers.",
      link: "#"
    },
    {
      name: "RAG Document Q&A System",
      desc: "LLM-powered system answering queries using embeddings and FAISS vector DB.",
      link: "#"
    }
  ];
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-6">
        {projects.map(p => (
          <div key={p.name} className="border p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link} className="text-blue-600 underline mt-2 inline-block">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
