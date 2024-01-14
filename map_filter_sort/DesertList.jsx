function DesertList(props) {
    const sorteditems=props.data.sort((a, b) => a.calories > b.calories ? 1:-1);
    const filterItems=sorteditems.filter((a)=>a.calories < 600)
    const desertItems = filterItems.map((desert) => (
      <li key={desert.name}>{desert.name} - {desert.calories}</li>
    ));
      return (
      <ul>{desertItems}</ul>
      )
}
export default DesertList;