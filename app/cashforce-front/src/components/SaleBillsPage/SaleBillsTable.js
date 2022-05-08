import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import HandShake from '../svgs/HandShake'
import './saleBillsTable.css'
import SaleBillsTableDesktop from './SaleBillsTableDesktop'
import SaleBillsTableMobile from './SaleBillsTableMobile'

function SaleBillsTable () {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  const [saleBills, setSaleBills] = useState([])

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })

  useEffect(() => {
    try {
      axios.get('/orders').then(res => {
        setSaleBills(res.data)
      })
    } catch (err) {
      console.log(err.message)
    }
  }, [])

  return (
    <section className="saleBills-table-container">
      <header className="saleBills__header">
        <div className="saleBills__header-heading-container">
          <HandShake width={27} height={27} />
          <h1 className="saleBills__header-heading">Notas Fiscais</h1>
        </div>
        <p className="saleBills__header--subtitle">Visualize as notas fiscais que você tem.</p>
      </header>
      <section aria-label="Tabela de notas fiscais" className="saleBills-table">
        {dimensions.width > 768
          ? <SaleBillsTableDesktop saleBills={saleBills}/>
          : <SaleBillsTableMobile saleBills={saleBills}/> }
      </section>
    </section>
  )
}

export default SaleBillsTable
