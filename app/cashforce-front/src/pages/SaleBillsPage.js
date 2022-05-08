import React from 'react'
import Header from '../components/SaleBillsPage/Header'
import Menu from '../components/SaleBillsPage/Menu'
import SaleBillsTable from '../components/SaleBillsPage/SaleBillsTable'

function SaleBillsPage () {
  return (
    <section className="saleBillsPage">
      <Header />
      <Menu />
      <SaleBillsTable />
    </section>
  )
}

export default SaleBillsPage
