import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { PiNotePencilBold } from 'react-icons/pi'
import { FiChevronLeft, FiChevronRight, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { HiOutlineDesktopComputer, HiOutlinePhone, HiOutlineDotsVertical } from 'react-icons/hi'
import { FaPlus } from 'react-icons/fa6'
import { AiOutlineClockCircle } from 'react-icons/ai'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './index.css'

const Units = () => {
  const [calendarActive, setCalendarActive] = useState(false)
  const [selectedDate, setSelectedDate] = useState('Jun 24, 2022')
  const [calendarValue, setCalendarValue] = useState()
  const [modalActive, setModalActive] = useState(false)
  const [condominium, setCondominium] = useState('')
  const [unit, setUnit] = useState('')
  const [apartment, setApartment] = useState('')
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [contact, setContact] = useState('')
  const [phone, setPhone] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')

  const columns = [
    { field: 'time', headerName: 'Tempo', width: 150 },
    { field: 'col2', headerName: 'Lorem ipsum', width: 150 },
    { field: 'col3', headerName: 'Lorem ipsum', width: 150 },
    { field: 'col4', headerName: 'Lorem ipsum', width: 150 },
    { field: 'col5', headerName: 'Lorem ipsum', width: 250 },
    { field: 'col6', headerName: 'Lorem ipsum', width: 250 },
    { field: 'icon', headerName: 'Lorem ipsum', width: 120, renderCell: (params) => {
      if(params.value === 'desktop'){
        return <HiOutlineDesktopComputer size={24} color='#666E7D' style={{margin: '0 auto'}}/>
      } else if(params.value === 'phone'){
        return<HiOutlinePhone size={24} color='#666E7D' style={{margin: '0 auto'}}/>
      }
    }},
    { field: 'status', headerName: 'Lorem ipsum', width: 250, renderCell: (params) => {
      if(params.value === 'status-orange'){
        return (
          <div className="status orange">
            <div className="status__title">
              <AiOutlineClockCircle size={20} color='#F24E1E'/>
              <p>Lorem</p>
            </div>
            <span>05:54</span>
          </div>
        )
      } else if(params.value === 'status-green'){
        return (
          <div className="status green">
            <div className="status__title">
              <AiOutlineClockCircle size={20} color='#02A443'/>
              <p>Lorem</p>
            </div>
          </div>
        )
      } else if(params.value === 'status-grey'){
        return (
          <div className="status grey">
            <div className="status__title">
              <AiOutlineClockCircle size={20} color='#00000066'/>
              <p>Lorem</p>
            </div>
          </div>
        )
      }
    }},
    { field: 'options', headerName: '', width: 80, renderCell: (params) => {
      return params.value && (
        <div className="options">
          <HiOutlineDotsVertical size={24} color='#6774BD'/>
          <div className="options__items">
            <div className="options__item">
              <p>Editar</p>
            </div>
            <div className="options__item">
              <p>Visualizar</p>
            </div>
          </div>
        </div>
      )
    }},
  ];

  const rows = [
    { id: 1, time: '17:30', col2: 'Lorem ipsum', col3: 'Lorem ipsum', col4: 'Lorem ipsum', col5: 'Lorem ipsum', col6: 'Lorem ipsum', icon: 'desktop', status: 'status-orange', options: true },
    { id: 2, time: '17:00 - 17:30', col2: 'Lorem ipsum', col3: 'Lorem ipsum', col4: 'Lorem ipsum', col5: 'Lorem ipsum', col6: 'Lorem ipsum', icon: 'phone', status: 'status-green', options: true },
    { id: 3, time: '15:30 - 17:00', col2: 'Lorem ipsum', col3: 'Lorem ipsum', col4: 'Lorem ipsum', col5: 'Lorem ipsum', col6: 'Lorem ipsum', icon: 'desktop', status: 'status-grey', options: true },
    { id: 4, time: '17:30', col2: 'Lorem ipsum', col3: 'Lorem ipsum', col4: 'Lorem ipsum', col5: 'Lorem ipsum', col6: 'Lorem ipsum', icon: 'desktop', status: 'status-orange', options: true },
    { id: 5, time: '17:00 - 17:30', col2: 'Lorem ipsum', col3: 'Lorem ipsum', col4: 'Lorem ipsum', col5: 'Lorem ipsum', col6: 'Lorem ipsum', icon: 'phone', status: 'status-green', options: true },
    { id: 6, time: '15:30 - 17:00', col2: 'Lorem ipsum', col3: 'Lorem ipsum', col4: 'Lorem ipsum', col5: 'Lorem ipsum', col6: 'Lorem ipsum', icon: 'desktop', status: 'status-grey', options: true },
    { id: 7, time: '17:30', col2: 'Lorem ipsum', col3: 'Lorem ipsum', col4: 'Lorem ipsum', col5: 'Lorem ipsum', col6: 'Lorem ipsum', icon: 'desktop', status: 'status-orange', options: true },
    { id: 8, time: '17:00 - 17:30', col2: 'Lorem ipsum', col3: 'Lorem ipsum', col4: 'Lorem ipsum', col5: 'Lorem ipsum', col6: 'Lorem ipsum', icon: 'phone', status: 'status-green', options: true },
    { id: 9, time: '15:30 - 17:00', col2: 'Lorem ipsum', col3: 'Lorem ipsum', col4: 'Lorem ipsum', col5: 'Lorem ipsum', col6: 'Lorem ipsum', icon: 'desktop', status: 'status-grey', options: true },
    { id: 10, time: '17:30', col2: 'Lorem ipsum', col3: 'Lorem ipsum', col4: 'Lorem ipsum', col5: 'Lorem ipsum', col6: 'Lorem ipsum', icon: 'desktop', status: 'status-orange', options: true },
    { id: 11, time: '17:00 - 17:30', col2: 'Lorem ipsum', col3: 'Lorem ipsum', col4: 'Lorem ipsum', col5: 'Lorem ipsum', col6: 'Lorem ipsum', icon: 'phone', status: 'status-green', options: true },
    { id: 12, time: '15:30 - 17:00', col2: 'Lorem ipsum', col3: 'Lorem ipsum', col4: 'Lorem ipsum', col5: 'Lorem ipsum', col6: 'Lorem ipsum', icon: 'desktop', status: 'status-grey', options: true },
  ];

  const handleDateSelect = (date) => {
    setCalendarValue(date)
    setSelectedDate(new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium' }).format(date))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleModal = (e) => {
    e.preventDefault()
    setModalActive(!modalActive)
  }

  return (
    <div className="container">
      <div className="table">
        <div className="table__title">
          <h2>Unidades</h2>
          <div className="table__buttons">
            <div className="table__date">
              <div className="table__arrow">
                <FiChevronLeft size={20} color="#666E7D"/>
              </div>
              <div className="table__day" onClick={() => setCalendarActive(!calendarActive)}>
                <p>{selectedDate}</p>
                <span>
                  Hoje
                  {calendarActive ? (
                    <FiChevronUp size={16} color="#666E7D"/>
                  ) : (
                    <FiChevronDown size={16} color="#666E7D"/>
                  )}
                </span>
              </div>
              <div className="table__arrow">
                <FiChevronRight size={20} color="#666E7D"/>
              </div>
            </div>
            <div className={`table__calendar ${calendarActive ? "active" : ""}`}>
              <Calendar onChange={handleDateSelect} value={calendarValue}/>
            </div>
            <button className="table__button" onClick={(e) => handleModal(e)}>
              <FaPlus size={18} color='#fff'/>
              Novo cadastro
            </button>
          </div>
        </div>
        <div className="table__content">
          <DataGrid checkboxSelection rows={rows} columns={columns} headerClassName="table-header"/>
        </div>
        {modalActive && (
          <div className="modal">
            <div className="modal__out" onClick={(e) => handleModal(e)}></div>
            <div className="modal__content">
              <div className="modal__title">
                <PiNotePencilBold size={50} color='#000'/>
                <h2>Cadastro de Unidades</h2>
              </div>
              <div className="modal__form">
                <form onSubmit={handleSubmit}>
                  <div className="modal__row grid-4-1">
                    <div className="modal__field">
                      <label htmlFor="condominium">Condomínio</label>
                      <input
                        type="text"
                        name="condominium"
                        id="condominium"
                        value={condominium}
                        onChange={(e) => setCondominium(e.target.value)}
                      />
                    </div>
                    <div className="modal__field">
                      <label htmlFor="unit">Unidade</label>
                      <input
                        type="text"
                        name="unit"
                        id="unit"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal__row grid-1-4-2">
                    <div className="modal__field">
                      <label htmlFor="apartment">Apto</label>
                      <input
                        type="text"
                        name="apartment"
                        id="apartment"
                        value={apartment}
                        onChange={(e) => setApartment(e.target.value)}
                      />
                    </div>
                    <div className="modal__field">
                      <label htmlFor="name">Nome Condômino</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="modal__field">
                      <label htmlFor="cpf">CPF</label>
                      <input
                        type="text"
                        name="cpf"
                        id="cpf"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal__row grid-1-1-1-1">
                    <div className="modal__field">
                      <label htmlFor="contact">Contato</label>
                      <input
                        type="text"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      />
                    </div>
                    <div className="modal__field">
                      <label htmlFor="phone">Telefone fixo</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="modal__field">
                      <label htmlFor="whatsapp">WhatsApp</label>
                      <input
                        type="text"
                        name="whatsapp"
                        id="whatsapp"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                      />
                    </div>
                    <div className="modal__field">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <button type="submit" className='modal__button'>Salvar</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Units