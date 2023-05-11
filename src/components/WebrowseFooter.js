import React, { useEffect } from "react"
import styled from "styled-components"
import { FaGithub } from "react-icons/fa"
const StyledFooter = styled.footer`
  background-color: #19181d;
  padding: 0 112px;
  margin-top: 100px;
  @media screen and (max-width: 414px) {
    padding: 0 20px;
  }
  .wrapper {
    padding: 32px 0;
    border-top: 1px solid #333;
    display: flex;
    justify-content: space-between;
    .copyright {
      color: #787878;
    }
    .socials {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }
`

const StyledNewsletter = styled.section`
  width: 100%;
  padding: 48px 112px;
  background: #212026;
  @media screen and (max-width: 414px) {
    padding: 48px 20px;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 414px) {
      flex-direction: column;
      gap: 20px;
    }
    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      .title {
        color: #fff;
        font-weight: 600;
        font-size: 30px;
        line-height: 38px;
      }
      .desc {
        color: rgba(228, 231, 236, 0.7);
        font-weight: normal;
        font-size: 20px;
        line-height: 30px;
      }
    }
    .subscribe {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      .submit {
        display: flex;
        align-items: center;
        gap: 16px;
        @media screen and (max-width: 414px) {
          flex-direction: column;
          align-items: flex-start;
        }
        input {
          outline: none;
          padding: 10px 14px;
          font-size: 16px;
          line-height: 24px;
          width: 280px;
          border: none;
          background: #ffffff;
          border: 1px solid #d0d5dd;
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          border-radius: 8px;
        }
        .btn {
          cursor: pointer;
          width: fit-content;
          border: none;
          padding: 10px 18px;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #19181d;
          background: #1fe1f9;
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          border-radius: 8px;
        }
      }
      .tip {
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #667085;
      }
    }
  }
`
export default function WebrowseFooter() {
  useEffect(() => {
    if (window) {
      window.addEventListener("load", () => {
        Bridger.initWidget({ id: "148215382948302848" })
      })
    }
  }, [])

  return (
    <>
      <StyledNewsletter className="newsletter">
        <div className="wrapper">
          <div className="info">
            <h3 className="title">Get notified</h3>
            <p className="desc">
              Stay up to date with the latest news, announcements, and articles.
            </p>
          </div>
          <div className="subscribe">
            <form
              action="https://www.getrevue.co/profile/privoce/add_subscriber"
              method="post"
              id="revue-form"
              name="revue-form"
              target="_blank"
            >
              <div className="submit">
                <input
                  required
                  type="email"
                  name="member[email]"
                  id="member_email"
                  placeholder="Enter your email"
                />
                <input
                  className="btn"
                  type="submit"
                  value="Subscribe"
                  name="member[subscribe]"
                  id="member_submit"
                />
              </div>
            </form>
            <span className="tip">No Spam. Ever.</span>
          </div>
        </div>
      </StyledNewsletter>
      <StyledFooter>
        <div className="wrapper">
          <div className="copyright">© 2023 Privoce. All rights reserved.</div>
          <ul className="socials">
            {/* <li className="social">
                    <FaTwitter size={24} color="#787878" />
                    </li>
                    <li className="social">
                    <FaFacebook size={24} color="#787878" />
                    </li> */}
            <li className="social">
              <a
                href="https://github.com/Privoce/webrowse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} color="#787878" />
              </a>
            </li>
          </ul>
        </div>
      </StyledFooter>
    </>
  )
}
