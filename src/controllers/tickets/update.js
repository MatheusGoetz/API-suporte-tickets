export function update({req, res, database}){
  const { id } = req.params
  const { equipament, description } = req.body

  return res.end();
}