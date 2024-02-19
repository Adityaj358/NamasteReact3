const ContactUs = () => {
  return (
    <div className="bg-emerald-400 px-28 py-60 ">
      <div className="p-2 m-2">
      <h1 className="font-bold text-3xl p-1 m-1">Contact us Page</h1>

      <form>
        <input type="text" className="border border-black p-2 m-2 rounded-lg" placeholder="name"></input>
        <input type="text" className="border border-black p-2 m-2 rounded-3xl" placeholder="message"></input>
        <button className="border border-black p-2 m-2 rounded-lg bg-gray-100">Submit</button>
      </form>
      </div>
    </div>
  );
};
export default ContactUs;
