"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

const skillCategories = [
  {
    title: "Programming & Core",
    items: [...resumeData.skills.programming, ...resumeData.skills.coreConcepts],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Database & Backend",
    items: [...resumeData.skills.database, "PHP"],
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "Tools & Analytics",
    items: resumeData.skills.tools,
    color: "from-emerald-400 to-teal-500"
  },
  {
    title: "Soft Skills",
    items: resumeData.skills.softSkills,
    color: "from-orange-400 to-rose-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 w-full relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-indigo-500 mb-4">Technical Arsenal</h2>
            <h3 className="text-[40px] md:text-[56px] font-heading font-black leading-[1.1] text-slate-900 tracking-tight">
              Tools of the <span className="text-gradient-primary">Trade.</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel p-10 rounded-[32px] group relative overflow-hidden"
            >
              {/* Subtle hover background glow */}
              <div className={`absolute -inset-10 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-r ${category.color} blur-3xl`} />
              
              <h4 className="text-2xl font-heading font-bold text-slate-900 mb-8 relative z-10">{category.title}</h4>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 relative z-10"
              >
                {category.items.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-700 font-medium hover:shadow-md hover:border-indigo-200 hover:text-indigo-600 transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
