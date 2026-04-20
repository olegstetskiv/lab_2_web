function Skills() {
  return (
    <section className="card p-6 rounded-lg shadow-lg border-t-4 border-sky-500">
      <h2 className="text-xl font-bold uppercase border-b-2 pb-2 mb-4">
        Навички
      </h2>
      <ul className="grid grid-cols-1 gap-2">
        {['OSINT', 'Управління базами даних (SQL)', 'Фронтенд розробка (HTML/CSS)'].map((skill) => (
          <li key={skill} className="flex items-center text-slate-600">
            <span className="skill-dot w-2 h-2 mr-3 rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Skills;