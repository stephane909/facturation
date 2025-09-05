const CreateCustomer = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const customerForm = new FormData(event.target);

    const customerDatas = Object.fromEntries(customerForm.entries());
    console.log(customerDatas);

    event.target.reset();

    /*await fetch("https://example.org/post", {
      method: "POST",
      body: JSON.stringify(enteredDatas),
      });*/
  };

  return (
    <>
      <p>Nouveau Client</p>
      <form onSubmit={() => handleSubmit(event)}>
        <div>
          <label htmlFor="name">Nom</label>
          <br />
          <input name="name" type="text" />
        </div>
        <div>
          <label htmlFor="siret">N° de Siret</label>
          <br />
          <input name="siret" type="number" />
        </div>
        <div>
          <label htmlFor="address">Adresse, CP, Ville</label>
          <br />
          <input name="address" type="text" />
        </div>
        <div>
          <label htmlFor="email">eMail</label>
          <br />
          <input name="email" type="email" />
        </div>
        <div>
          <br />
          <input type="submit" value="save" />
        </div>
      </form>
    </>
  );
};

export default CreateCustomer;
