

async function getData() {
  const res = await fetch("https://carapi.app/api/engines/?year=2020&verbose=yes&engine_type=electric&fuel_type=electric")
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const {data} = await res.json()
  console.log(data)
  return data
}

async function cleanData(rawData ) {
  const cleanData = []

  for (const element of rawData) {
    const {
      id,
      engine_type,
      fuel_type,
      horsepower_hp,
      drive_type,
      make_model_trim: { 
        name: trim_name,
        description,
        msrp,
        make_model: {
          name: model_name,
          make: {
            name: make_name
          }
        }
      },
    } = element

    cleanData.push({ 
      brand: make_name, 
      model: model_name, 
      id: id, 
      trim: trim_name,
      desc: description,
      msrp: msrp,
      drive_type: drive_type,
      engine: engine_type,
      fuel: fuel_type, 
      HP: horsepower_hp, 
    })
  }
  return cleanData
}

//export default 
async function Page() {
  const rawCarData = await getData();

  cleanData(rawCarData).then(data => console.log(data))

  
  // return (
  //   <div>
  //     <h1>Specs</h1>
  //     {/* <TableSort data = {rawCarData.data} /> */}
  //   </div>
  // );
}

Page()