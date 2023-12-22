import USERS from '../data/users'

function SartliRendering(props) {
  if(props.isActive==false)
  return (
    <>
        Aktif Değil
    </>
  )

  if(props.isLoading)
  return (
    <div>
        Veriler Yükleniyor...
    </div>
  )

  return (
    <>
        <h2>Şartlı Renderin Kullanıcı Listesi</h2>
        <ul>
            {
                USERS.map((user,index) => <li key={index}>{user}</li>)
            }
        </ul>
    </>
  )
}

export default SartliRendering