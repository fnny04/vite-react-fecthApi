const TextField = () => {
  return (
    <>
      <div>
        <label for="cek jumalah" className="mb-2 text-sm">
          Masukan Jumlah
        </label>
        <input
          type="number"
          id="jumlah"
          className="border-2 rounded-lg w-full p-3"
        ></input>
      </div>
    </>
  );
};

export default TextField;
