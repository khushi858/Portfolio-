import React from "react";

export default function Skills() {
  const skills = ["Python", "JavaScript", "React", "Node.js", "MongoDB", "PyTorch", "TensorFlow", "Solidity", "MetaMask", "LLM APIs", "FAISS"];
  return (
    <section className="p-8 bg-gray-100 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map(skill => (
          <span key={skill} className="bg-blue-600 text-white px-3 py-1 rounded-full">{skill}</span>
        ))}
      </div>
    </section>
  );
}
