const Error = ({ title, message }: { title: string; message: string }) => (
  <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 my-5" role="alert">
    <p className="font-bold">{title}</p>
    <p>{message}</p>
  </div>
);

export default Error;
export { Error };