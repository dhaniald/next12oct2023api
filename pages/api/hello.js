//1.Import area

//2.Defenation area

export default function handler(req, res) {
  //function serialzation
  //object.method().method(argument)
                      //{Property:value} is a js object
  res.status(200).json({
    Country: `My country is-${req.query.state}`,
    State:"Uttar pradesh",
    city1:`is- ${req.query.city1}`,
      //obj.property.property
    testkey:req.query.state
  })
}

//3. Export area 