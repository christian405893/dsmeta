    import icon from '../../assets/img/notification-icon.svg' // se o arquivo q deseja buscar esteja em pasta anterior use ../
    import './styles.css' /*se o arquivo está na mesma pasta use ./ */

    function NotificationButton() {
    return (
    
     <div className="dsmeta-red-btn" >
        <img src={icon} alt="notificar"/>
    </div>
    
    )
  }
  
  export default NotificationButton
  