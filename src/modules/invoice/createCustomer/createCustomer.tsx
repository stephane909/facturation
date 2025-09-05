import { useState } from "react";

const CreateCustomer = () => {
  // State de stockage des champs
  const [enteredDatas, setEnteredDatas] = useState({
    name: "",
    siret: "",
    address: "",
    email: "",
  });

  // State d'édition des champs pour le check des values
  const [editedInput, setEditedInput] = useState({
    name: false,
    siret: false,
    address: false,
    email: false,
  });

  // #FACTURATION-US-1-AC-2 - test name : On renvoie true si le champ est vides et on été édités
  const invalidName = editedInput.name && enteredDatas.name === "";

  // #FACTURATION-US-1-AC-3 - test siret : On renvoie true si la longueur du champs n'est pas de 14 et a été édité
  const invalidSiret = editedInput.siret && enteredDatas.siret.length !== 14;

  // #FACTURATION-US-1-AC-4 - test address : On renvoie true si le champ est vides et on été édités
  const invalidAddress = editedInput.address && enteredDatas.address === "";

  // #FACTURATION-US-1-AC-5 - test email: On renvoie true si le mail ne possède ni d'@, ni de point et a été édité
  const invalidEmail =
    editedInput.email &&
    enteredDatas.address.includes("@") &&
    enteredDatas.address.includes(".");

  // mets à jour le state enteredDatas en fonction du name de
  // l'input qui déclenche la fonction via son onChange
  const handleInputChange = (valueName: string, value: any) => {
    setEnteredDatas((prevValues) => ({
      ...prevValues,
      [valueName]: value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    console.log("fetching:");
    console.log(enteredDatas);

    /*await fetch("https://example.org/post", {
      method: "POST",
      body: JSON.stringify(enteredDatas),
      });*/
  };

  // mets à jour le state editedInput en fonction du name de
  // l'input qui déclenche la fonction via son onBlur
  const handleInputBlur = (valueName: string) => {
    setEditedInput((prevEdits) => ({
      ...prevEdits,
      [valueName]: true,
    }));
  };

  return (
    <>
      <p>Nouveau Client</p>
      <form onSubmit={() => handleSubmit(event)}>
        <div>
          <label htmlFor="name">Nom</label>
          <br />
          <input
            name="name"
            type="text"
            onBlur={() => handleInputBlur("name")}
            onChange={(event) => handleInputChange("name", event.target.value)}
            value={enteredDatas.name}
          />
          {invalidName && <span>Veuillez saisir une valeur</span>}
        </div>
        <div>
          <label htmlFor="siret">N° de Siret</label>
          <br />
          <input
            name="siret"
            type="number"
            onBlur={() => handleInputBlur("siret")}
            onChange={(event) => handleInputChange("siret", event.target.value)}
            value={enteredDatas.siret}
          />
          {invalidSiret && (
            <span>Veuillez saisir un siret valide ( 14 chiffres )</span>
          )}
        </div>
        <div>
          <label htmlFor="address">Adresse, CP, Ville</label>
          <br />
          <input
            name="address"
            type="text"
            onBlur={() => handleInputBlur("address")}
            onChange={(event) =>
              handleInputChange("address", event.target.value)
            }
            value={enteredDatas.address}
          />
          {invalidAddress && <span>Veuillez saisir une adresse</span>}
        </div>
        <div>
          <label htmlFor="email">eMail</label>
          <br />
          <input
            name="email"
            type="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredDatas.email}
          />
          {invalidEmail && <span>Veuillez saisir un email valide</span>}
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
