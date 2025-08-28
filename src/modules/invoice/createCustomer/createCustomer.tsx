const CreateCustomer = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const name = event.target.name.value;
    const siret = event.target.siret.value;
    const address = event.target.address.value;
    const email = event.target.email.value;

    const createCustomerData = { name, siret, address, email };

    console.log(createCustomerData);

    await fetch("https://example.org/post", {
      method: "POST",
      body: JSON.stringify(createCustomerData),
    });
  };

  return (
    <>
      <p>Nouveau Client</p>
      <form onSubmit={() => handleSubmit(event)} method="POST">
        <input name="name" type="text" />
        <input name="siret" type="number" />
        <input name="address" type="text" />
        <input name="email" type="email" />
        <input type="submit" value="save" />
      </form>
    </>
  );
};

export default CreateCustomer;
