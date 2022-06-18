import React from 'react'
import styles from './index.module.scss'
import { transEther } from '../../utils/transEther'

export const Transaction: React.FC = () => {
  React.useEffect(() => {
    window.ethereum?.enable()
  }, [])

  const [formValue, setFormValue] = React.useState({
    address: '',
    token: '',
  })

  return (
    <div className={styles.container}>
      <div className={styles.transfer}>
        <h1>Transfer</h1>
        <p>Transfer your Token here.</p>

        <form
          className={styles.form}
          onSubmit={async event => {
            event.preventDefault()
            const transaction = await transEther(formValue)
            if (!!transaction) {
              alert('the transaction is completed.')
              console.log(transaction)
            }
          }}
        >
          <div className={styles.item}>
            <div>Address</div>
            <input
              type="text"
              required={true}
              // placeholder="multiple addresses use comma as divider"
              className={styles.input}
              value={formValue.address}
              onChange={e =>
                setFormValue({ ...formValue, address: e.target.value })
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
            <input type="submit" value="Transfer" className={styles.button} />
          </div>
        </form>
      </div>
    </div>
  )
}
