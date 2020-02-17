# Api Nest

 Tecnologias:
 
  *MongoDB
  *Nest.js
  *Mongoose
  *React
  *Material UI
  *React Toast Calendar
  *Axios
  *Formik

### Pre-requisitos 📋

	Es necesario Node.Js y MongoDB.
  Crear DB en mongo y cambiar los datos necesarios en api-nest\backend\src.
  Despues crear e insertar Catalogos.
  
    db.createCollection('states');
    db.states.insert([
      { id: 1, description: 'not verified' },
      { id: 2, description: 'verified' },
      { id: 3, description: 'disabled' },
    ]);

    db.createCollection('typeusers');
    db.typeusers.insert([
      { description: 'superadmin', id: 1 },
      { description: 'clinician', id: 2 },
      { description: 'patient', id: 3 },
    ]);
  
	
## Comenzando 🚀

	Ir a carpeta Backend y en linea de comandos ejecutar start:dev
	Ir a carpeta Fronted y en linea de comandos ejecutar yarn start
