import icon_list from './assets/icon-list.svg'
const List = () => {
  return (
    <div className="features">
            <ul>
                <li>
                    <img src={icon_list}alt="" />
                    Product discovery and building what matters
                </li>

                <li>
                    <img src={icon_list} alt="" />
                    Measuring to ensure updates are a success
                </li>

                <li>
                    <img src={icon_list} alt="" />
                    And much more!
                </li>
            </ul>
    </div>
  )
}

export default List