export interface DebtorBalanceType {
  debtor: DebtorType
  totalDebt: number
}

interface DebtorType {
  id: string
  fullName: string
}
