export const Footer = () => {
  return (
    <footer className="box-border bg-gray-900 py-12">
      <div className="box-border max-w-[1312px] flex gap-10 mx-auto my-0 px-6 py-0 max-md:flex-col">
        <div className="box-border max-w-[295px]">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-2"><path d="M16.9336 2.98389L3.60022 9.65055L16.9336 16.3172L30.2669 9.65055L16.9336 2.98389ZM3.60022 22.9839L16.9336 29.6506L30.2669 22.9839M3.60022 16.3172L16.9336 22.9839L30.2669 16.3172" fill="#6366F1"></path></svg>`,
            }}
          />
          <div className="box-border text-xl font-bold text-white mb-4">
            OutSource Pro
          </div>
          <p className="box-border text-base text-gray-400 mb-6">
            Transform your business with our professional outsourcing solutions.
            Trusted by companies worldwide.
          </p>
          <div className="box-border flex gap-4">
            {/* Social Icons */}
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.9336 12.3174C22.9336 6.79438 18.4566 2.31738 12.9336 2.31738C7.41056 2.31738 2.93356 6.79438 2.93356 12.3174C2.93356 17.3084 6.59056 21.4454 11.3716 22.1954V15.2084H8.83156V12.3174H11.3716V10.1144C11.3716 7.60838 12.8636 6.22438 15.1486 6.22438C16.2426 6.22438 17.3866 6.41938 17.3866 6.41938V8.87938H16.1266C14.8836 8.87938 14.4966 9.65038 14.4966 10.4414V12.3174H17.2696L16.8266 15.2074H14.4966V22.1954C19.2766 21.4454 22.9336 17.3084 22.9336 12.3174Z" fill="currentColor"></path></svg>`,
                }}
              />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.22356 20.5683C16.7706 20.5683 20.8986 14.3153 20.8986 8.89334C20.8986 8.71534 20.8986 8.53834 20.8866 8.36334C21.6897 7.78187 22.3829 7.06195 22.9336 6.23734C22.1846 6.56934 21.3901 6.7871 20.5766 6.88334C21.4332 6.3704 22.0743 5.56369 22.3806 4.61334C21.5753 5.09123 20.6943 5.42807 19.7756 5.60934C19.157 4.9511 18.3386 4.51517 17.4472 4.36904C16.5558 4.22291 15.6411 4.37474 14.8447 4.80101C14.0483 5.22728 13.4146 5.90421 13.0419 6.727C12.6691 7.54979 12.5779 8.47252 12.7826 9.35234C11.1512 9.27058 9.55517 8.84667 8.09821 8.10811C6.64125 7.36955 5.35589 6.33286 4.32556 5.06534C3.80088 5.96854 3.64015 7.03776 3.8761 8.0553C4.11205 9.07285 4.72693 9.96222 5.59556 10.5423C4.94282 10.5234 4.3042 10.3478 3.73356 10.0303V10.0823C3.73395 11.0296 4.06196 11.9476 4.66196 12.6807C5.26196 13.4137 6.09703 13.9167 7.02556 14.1043C6.42137 14.2691 5.78746 14.293 5.17256 14.1743C5.43472 14.9898 5.94524 15.7029 6.63269 16.214C7.32014 16.725 8.15014 17.0083 9.00656 17.0243C8.15568 17.6929 7.18135 18.1872 6.13929 18.4789C5.09723 18.7706 4.00789 18.854 2.93356 18.7243C4.81017 19.9287 6.99375 20.5674 9.22356 20.5643" fill="currentColor"></path></svg>`,
                }}
              />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9336 0.317383H5.93356C3.17256 0.317383 0.933563 2.55638 0.933563 5.31738V19.3174C0.933563 22.0784 3.17256 24.3174 5.93356 24.3174H19.9336C22.6956 24.3174 24.9336 22.0784 24.9336 19.3174V5.31738C24.9336 2.55638 22.6956 0.317383 19.9336 0.317383ZM8.93356 19.3174H5.93356V8.31738H8.93356V19.3174ZM7.43356 7.04938C6.46756 7.04938 5.68356 6.25938 5.68356 5.28538C5.68356 4.31138 6.46756 3.52138 7.43356 3.52138C8.39956 3.52138 9.18356 4.31138 9.18356 5.28538C9.18356 6.25938 8.40056 7.04938 7.43356 7.04938ZM20.9336 19.3174H17.9336V13.7134C17.9336 10.3454 13.9336 10.6004 13.9336 13.7134V19.3174H10.9336V8.31738H13.9336V10.0824C15.3296 7.49638 20.9336 7.30538 20.9336 12.5584V19.3174Z" fill="currentColor"></path></svg>`,
                }}
              />
            </a>
          </div>
        </div>

        <div className="box-border flex gap-10 max-sm:flex-col max-sm:gap-8">
          <div>
            <h4 className="box-border text-lg font-bold text-white mb-6">
              Quick Links
            </h4>
            <ul>
              <li className="mb-3">
                <a
                  href="#about"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  About Us
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#services"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  Our Services
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  FAQ's
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="box-border text-lg font-bold text-white mb-6">
              Our Services
            </h4>
            <ul>
              <li className="mb-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  IT Outsourcing
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  Customer Support
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  Back Office Support
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  Digital Marketing
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  Data Entry Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="box-border text-lg font-bold text-white mb-6">
              Contact Info
            </h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6478 14.1281L12.112 17.664C11.9573 17.8188 11.7737 17.9416 11.5716 18.0253C11.3695 18.1091 11.1528 18.1522 10.9341 18.1522C10.7153 18.1522 10.4986 18.1091 10.2965 18.0253C10.0944 17.9416 9.91077 17.8188 9.75614 17.664L6.21947 14.1281C5.28716 13.1958 4.65225 12.0079 4.39504 10.7147C4.13784 9.4215 4.26988 8.08108 4.77447 6.86292C5.27907 5.64477 6.13355 4.6036 7.22987 3.87107C8.32619 3.13854 9.61511 2.74756 10.9336 2.74756C12.2522 2.74756 13.5411 3.13854 14.6374 3.87107C15.7337 4.6036 16.5882 5.64477 17.0928 6.86292C17.5974 8.08108 17.7294 9.4215 17.4722 10.7147C17.215 12.0079 16.5801 13.1958 15.6478 14.1281Z" stroke="#6366F1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.4336 9.41406C13.4336 10.0771 13.1702 10.713 12.7014 11.1818C12.2325 11.6507 11.5966 11.9141 10.9336 11.9141C10.2706 11.9141 9.63467 11.6507 9.16583 11.1818C8.69699 10.713 8.43359 10.0771 8.43359 9.41406C8.43359 8.75102 8.69699 8.11514 9.16583 7.6463C9.63467 7.17745 10.2706 6.91406 10.9336 6.91406C11.5966 6.91406 12.2325 7.17745 12.7014 7.6463C13.1702 8.11514 13.4336 8.75102 13.4336 9.41406Z" stroke="#6366F1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
                  }}
                />
                <p className="text-gray-400">
                  <span>123 Business Street, Suite 100</span>
                  <br />
                  <span>New York, NY 10001</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.43359 4.41423C3.43359 3.9722 3.60919 3.54827 3.92175 3.23571C4.23431 2.92315 4.65823 2.74756 5.10026 2.74756H7.83359C8.00842 2.74769 8.17878 2.80281 8.32056 2.9051C8.46233 3.00739 8.56835 3.15169 8.62359 3.31756L9.87193 7.06173C9.93518 7.25201 9.9277 7.45872 9.85086 7.64393C9.77402 7.82914 9.63297 7.98044 9.45359 8.07006L7.57276 9.01173C8.49469 11.0522 10.129 12.6865 12.1694 13.6084L13.1111 11.7276C13.2007 11.5482 13.352 11.4071 13.5372 11.3303C13.7224 11.2535 13.9291 11.246 14.1194 11.3092L17.8636 12.5576C18.0296 12.6128 18.174 12.719 18.2763 12.8609C18.3786 13.0029 18.4336 13.1734 18.4336 13.3484V16.0809C18.4336 16.5229 18.258 16.9468 17.9454 17.2594C17.6329 17.572 17.209 17.7476 16.7669 17.7476H15.9336C9.03026 17.7476 3.43359 12.1509 3.43359 5.24756V4.41423Z" stroke="#6366F1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
                  }}
                />
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.43359 6.91406L10.0086 11.2974C10.2825 11.4801 10.6043 11.5776 10.9336 11.5776C11.2628 11.5776 11.5847 11.4801 11.8586 11.2974L18.4336 6.91406M5.10026 16.0807H16.7669C17.209 16.0807 17.6329 15.9051 17.9454 15.5926C18.258 15.28 18.4336 14.8561 18.4336 14.4141V6.08073C18.4336 5.6387 18.258 5.21478 17.9454 4.90222C17.6329 4.58966 17.209 4.41406 16.7669 4.41406H5.10026C4.65823 4.41406 4.23431 4.58966 3.92175 4.90222C3.60919 5.21478 3.43359 5.6387 3.43359 6.08073V14.4141C3.43359 14.8561 3.60919 15.28 3.92175 15.5926C4.23431 15.9051 4.65823 16.0807 5.10026 16.0807Z" stroke="#6366F1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
                  }}
                />
                <p className="text-gray-400">contact@outsourcepro.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-border max-w-[1312px] border-t border-gray-700 flex justify-between items-center mt-12 mb-0 mx-auto p-6 max-sm:flex-col max-sm:text-center max-sm:gap-4">
        <div className="text-gray-400 text-sm">
          © 2024 OutSource Pro. All rights reserved.
        </div>
        <div className="flex gap-6 max-sm:justify-center">
          <a
            href="#"
            className="text-gray-400 text-sm hover:text-gray-300 underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 text-sm hover:text-gray-300 underline"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-400 text-sm hover:text-gray-300 underline"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
