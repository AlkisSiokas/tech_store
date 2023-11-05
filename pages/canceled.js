import React from 'react'
import Link from 'next/link';
import { BsBagX } from 'react-icons/bs';

const Canceled = () => {
    return (
        <div className="cancel-wrapper">
          <div className="cancel">
            <p className="icon">
              <BsBagX />
            </p>
            <h2>Payment Canceled</h2>
            <p className="description">
              If you have any questions, please email
              <a className="email" href="mailto:order@example.com">
                order@example.com
              </a>
            </p>
            <Link href="/">
              <button type="button" width="300px" className="btn">
                Return to Homepage
              </button>
            </Link>
          </div>
        </div>
      )
}

export default Canceled
