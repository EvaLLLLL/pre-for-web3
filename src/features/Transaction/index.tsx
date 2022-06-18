import React from 'react'
import styles from './index.module.scss'
import { transEther } from '../../utils/transEther'

export const Transaction: React.FC = () => {
  React.useEffect(() => {
    if (!window.ethereum) {
      alert('Please install & enable MetaMask!')
    }

    window.ethereum?.enable()
  }, [])

  const [loading, setLoading] = React.useState(false)
  const [formValue, setFormValue] = React.useState({
    addresses: '',
    token: '',
  })

  const clearForm = () => setFormValue({ addresses: '', token: '' })

  return (
    <div className={styles.container}>
      {!window.ethereum ? (
        <div className={styles.noprovider}>
          Please install & enable MetaMask!
        </div>
      ) : (
        <div className={styles.transfer}>
          <h1>Transfer</h1>
          <p>Transfer your Token here.</p>

          <form
            className={styles.form}
            onSubmit={async event => {
              event.preventDefault()
              setLoading(true)
              await transEther(formValue)
              clearForm()
              setLoading(false)
            }}
          >
            <div className={styles.item}>
              <div>Address</div>
              <input
                type="text"
                required={true}
                placeholder="multiple addresses use comma as divider"
                className={styles.input}
                value={formValue.addresses}
                onChange={e =>
                  setFormValue({ ...formValue, addresses: e.target.value })
                }
              />
            </div>
            <div className={styles.item}>
              <div>Token Amount</div>
              <input
                type="number"
                required
                className={styles.input}
                value={formValue.token}
                onChange={e =>
                  setFormValue({ ...formValue, token: e.target.value })
                }
              />
              <div>Make sure you have IYO Token.</div>
            </div>

            <div className={styles.submit}>
              <input
                type="submit"
                value={loading ? 'loading...' : 'Transfer'}
                className={styles.button}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
