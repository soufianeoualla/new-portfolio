import todo_list from '../assets/images/icon-todo.svg'
import calendar from '../assets/images/icon-calendar.svg'
import reminders from '../assets/images/icon-reminders.svg'
import planning from '../assets/images/icon-planning.svg'


const Features = () => {
  return (
    <ul className="features-drop-down">
       
            <li>
                <img src={todo_list} alt="" />
                <a href="">Todo List</a>
            </li>

            <li>
                <img src={calendar} alt="" />
                <a href="">Calendar</a>
            </li>
                
            <li>
             <img src={reminders} alt="" />
                <a href="">Reminders</a>
            </li>
                <li>
                <img src={planning} alt="" />
                <a href=""> Planning</a>
                </li>
            
        
    </ul>
  )
}

export default Features