import React from 'react'
import styles from './FileLoader.module.css'

const FileLoader  = ({loaded, ...props}) => {
  return (
    <div {...props} className={styles.fileLoader}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 0C6.0375 0 5.25 0.7875 5.25 1.75V26.25C5.25 27.2125
          6.0375 28 7 28H24.5C25.4625 28 26.25 27.2125
          26.25 26.25V7L19.25 0H7Z"
          fill="#C2C4FF"
        />
        <path
          d="M21 7H26.25L19.25 0V5.25C19.25 6.2125 20.0375 7 21 7Z"
          fill="#797DDF"
        />
        <path
          d="M26.25 12.25L21 7H26.25V12.25Z"
          fill="#C2C4FF"
        />
        <path
          d="M22.75 22.75C22.75 23.2312 22.3563 23.625 21.875
          23.625H2.625C2.14375 23.625 1.75 23.2312 1.75 22.75V14C1.75
          13.5187 2.14375 13.125 2.625 13.125H21.875C22.3563 13.125 22.75
          13.5187 22.75 14V22.75Z"
          fill="#585CC6"
        />
        <path
          d="M7.76384 16.581C7.76384 15.993 8.68783 15.993 8.68783
          16.581V19.3443C8.68783 20.4433 8.16284 21.1083 6.95271
          21.1083C6.35771 21.1083 5.86159 20.9464 5.42759 20.3873C5.07059
          19.9603 5.74259 19.3451 6.10659 19.7923C6.40059 20.1563 6.71559
          20.2403 7.02271 20.2263C7.41384 20.2123 7.75771 20.0364 7.76471
          19.3443V16.581H7.76384Z"
          fill="white"
        />
        <path
          d="M9.91748 16.5783C9.91748 16.3473 10.0995 16.0953 10.3935
          16.0953H12.0096C12.9196 16.0953 13.7386 16.7043 13.7386
          17.8716C13.7386 18.9776 12.9196 19.5936 12.0096
          19.5936H10.8415V20.5176C10.8415 20.8256 10.6455 20.9997 10.3935
          20.9997C10.1625 20.9997 9.91748 20.8256 9.91748
          20.5176V16.5783ZM10.8415 16.9765V18.7195H12.0096C12.4786
          18.7195 12.8496 18.3056 12.8496 17.8716C12.8496 17.3825
          12.4786 16.9765 12.0096 16.9765H10.8415Z"
          fill="white"
        />
        <path
          d="M18.7347 20.4628C18.2377 20.8758 17.6287 21.0508 17.0136
          21.0508C15.5436 21.0508 14.5015 20.2117 14.5015 18.5457C14.5015
          17.1334 15.6005 16.0353 17.0757 16.0353C17.6287 16.0353 18.2368
          16.2234 18.6708 16.6504C19.097 17.0695 18.4818 17.6925 18.0627
          17.3224C17.8037 17.0704 17.4397 16.8814 17.0757 16.8814C16.2296
          16.8814 15.4115 17.5595 15.4115 18.5457C15.4115 19.5817 16.0966
          20.2117 17.0136 20.2117C17.4397 20.2117 17.8037 20.0848 18.0627
          19.8967V19.0365H17.0136C16.3906 19.0365 16.4536 18.1825 17.0136
          18.1825H18.4127C18.6717 18.1825 18.9088 18.3785 18.9088
          18.5955V20.0857C18.9088 20.2117 18.8537 20.3289 18.7347 20.4628Z"
          fill="white"
        />
        <path
          d="M21.875 23.625H5.25V24.5H21.875C22.3563 24.5 22.75 24.1063
          22.75 23.625V22.75C22.75 23.2313 22.3563 23.625 21.875 23.625Z"
          fill="#C2C4FF"
        />
      </svg>
      <div className={styles.inf}>
        <span>Photo 01-02-2021-20-33</span>
        <div className={styles.line}>
          <div className={styles.progressline}></div>
        </div>
      </div>
      {
        loaded
          ? <button
              type='button'
              className={styles.redtrashbtn}
            >
                <svg
                  className={styles.redtrash}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M16.3694 7.90705C16.3694 7.96371 15.9253 13.581 15.6716
                    15.9451C15.5127 17.3959 14.5775 18.2759 13.1746
                    18.3009C12.0966 18.325 11.0414 18.3333 10.0032 18.3333C8.901
                    18.3333 7.82309 18.325 6.77678 18.3009C5.42088 18.2684 4.4848
                    17.3709 4.33406 15.9451C4.07309 13.5727 3.63706 7.96371
                    3.62895 7.90705C3.62085 7.73622 3.67596 7.57373 3.78781
                    7.44206C3.89803 7.3204 4.05688 7.24707 4.22383
                    7.24707H15.7826C15.9488 7.24707 16.0995 7.3204 16.2186
                    7.44206C16.3297 7.57373 16.3856 7.73622 16.3694 7.90705Z"
                    fill="#EB5757"
                  />
                  <path
                    d="M17.5 4.98068C17.5
                    4.63819 17.2301 4.36986 16.9059
                    4.36986H14.4762C13.9818 4.36986 13.5522 4.01821 13.442
                    3.52239L13.3059 2.91492C13.1154 2.18077 12.4581 1.66663
                    11.7206 1.66663H8.2802C7.53458 1.66663 6.88378 2.18077
                    6.68603 2.95491L6.55879 3.52323C6.44775 4.01821 6.01821
                    4.36986 5.52464 4.36986H3.09488C2.76988 4.36986 2.5 4.63819
                    2.5 4.98068V5.29733C2.5 5.63149 2.76988 5.90814 3.09488
                    5.90814H16.9059C17.2301 5.90814 17.5 5.63149
                    17.5 5.29733V4.98068Z"
                    fill="#EB5757"
                  />
              </svg>
            </button>
          : <svg
              className={styles.rotateloader}
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.91762 4.2107C10.0697 4.2107 11.0037 3.2681 11.0037
                2.10535C11.0037 0.942598 10.0697 0 8.91762 0C7.76551 0 6.83154
                0.942598 6.83154 2.10535C6.83154 3.2681 7.76551 4.2107 8.91762
                4.2107Z"
                fill="#585CC6"
              />
              <path
                d="M8.91762 18C9.60881 18 10.1691 17.4345 10.1691 16.7369C10.1691
                16.0393 9.60881 15.4739 8.91762 15.4739C8.22643 15.4739 7.66611
                16.0393 7.66611 16.7369C7.66611 17.4345 8.22643 18 8.91762 18Z"
                fill="#585CC6"
              />
              <path
                d="M3.79177 6.14254C4.82874 6.14254 5.66937 5.29414 5.66937
                4.24759C5.66937 3.20104 4.82874 2.35264 3.79177 2.35264C2.75479
                2.35264 1.91416 3.20104 1.91416 4.24759C1.91416 5.29414 2.75479
                6.14254 3.79177 6.14254Z"
                fill="#585CC6"
              />
              <path
                d="M14.0435 15.646C14.6195 15.646 15.0865 15.1747 15.0865
                14.5933C15.0865 14.0119 14.6195 13.5406 14.0435 13.5406C13.4674
                13.5406 13.0004 14.0119 13.0004 14.5933C13.0004 15.1747 13.4674
                15.646 14.0435 15.646Z"
                fill="#585CC6"
              />
              <path
                d="M1.66846 11.1054C2.58992 11.1054 3.33692 10.3515 3.33692
                9.42148C3.33692 8.4915 2.58992 7.73761 1.66846 7.73761C0.746994
                7.73761 0 8.4915 0 9.42148C0 10.3515 0.746994 11.1054 1.66846
                11.1054Z"
                fill="#585CC6"
              />
              <path
                d="M16.1661 10.2624C16.6267 10.2624 17 9.8856 17 9.4208C17 8.956
                16.6267 8.5792 16.1661 8.5792C15.7056 8.5792 15.3322 8.956 15.3322
                9.4208C15.3322 9.8856 15.7056 10.2624 16.1661 10.2624Z"
                fill="#585CC6"
              />
              <path
                d="M2.75956 13.5529C2.18896 14.1288 2.18896 15.0606 2.75956
                15.6364C3.32947 16.2123 4.25406 16.2123 4.82398 15.6364C5.39457
                15.0606 5.39457 14.1288 4.82398 13.5529C4.25406 12.9764 3.33015
                12.9709 2.75956 13.5529Z"
                fill="#585CC6"
              />
              <path
                d="M14.0428 4.87879C14.3882 4.87879 14.6682 4.59619 14.6682
                4.24759C14.6682 3.89899 14.3882 3.61639 14.0428 3.61639C13.6974
                3.61639 13.4174 3.89899 13.4174 4.24759C13.4174 4.59619 13.6974
                4.87879 14.0428 4.87879Z"
                fill="#585CC6"
              />
            </svg>
      }
    </div>
  )
}

export default FileLoader;
