function Education() {
  return (
    <section className="card p-6 rounded-lg shadow-lg border-t-4 border-sky-500">
      <h2 className="text-xl font-bold uppercase border-b-2 pb-2 mb-4">Освіта</h2>
      <div className="card-content">
        <h3 className="font-bold text-lg uppercase">Бакалавр (2023 - 2027)</h3>
        <p className="italic mb-2 font-semibold">Національний університет "Львівська Політехніка"</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Кібербезпека</li>
          <li>Управління інформаційною безпекою</li>
        </ul>
      </div>
    </section>
  );
}
export default Education;