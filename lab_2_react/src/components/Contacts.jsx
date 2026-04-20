function Contacts() {
  return (
     <section className="card p-6 rounded-lg shadow-lg border-t-4 border-sky-500 h-full">
      <h2 className="text-xl font-bold uppercase border-b-2 pb-2 mb-4">
        Контактна інформація
      </h2>
      <ul className="space-y-3">
        <li><strong>Адреса:</strong> м. Городок (Львівська обл.)</li>
        <li><strong>Номер:</strong> +380967658345</li>
        <li><strong>Email:</strong> <a href="mailto:olegstetskiv@example.com" className="text-sky-600 hover:underline">olegstetskiv@example.com</a></li>
        <li><strong>Дата народження:</strong> 12.01.2006</li>
      </ul>
    </section>
  );
}
export default Contacts;