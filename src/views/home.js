import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Poochie Wursts</title>
        <meta
          name="description"
          content="Poochie Wursts is a charity-focused dachshund NFT collection on Ethereum!"
        />
        <meta property="og:title" content="Poochie Wursts" />
        <meta
          property="og:description"
          content="Poochie Wursts is a charity-focused dachshund NFT collection on Ethereum!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/52082c32-e809-40ec-9000-0c1f62efcb5f/39e13521-2ca3-4cf4-9724-3eb2757a426b?org_if_sml=1"
        />
      </Helmet>
      <div className={styles['container01']}>
        <div data-role="Header" className={styles['Navbar-container']}>
          <div
            className={` ${styles['Navbar']} ${projectStyles['section-Text']} `}
          >
            <div className={styles['Left-side']}>
              <div data-type="BurgerMenu" className={styles['Burger-menu']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
              <div className={styles['Links-container']}>
                <span
                  className={` ${styles['Link']} ${projectStyles['section-Text']} `}
                >
                  Home
                </span>
                <a
                  href="#inspiration"
                  className={` ${styles['Link01']} ${projectStyles['section-Text']} `}
                >
                  About
                </a>
                <span
                  className={` ${styles['Link02']} ${projectStyles['section-Text']} `}
                >
                  Attributes
                </span>
                <a
                  href="#ourstory"
                  className={` ${styles['Link03']} ${projectStyles['section-Text']} `}
                >
                  Rodamap
                </a>
              </div>
            </div>
            <div className={styles['Right-side']}>
              <button className={styles['Cta-btn']}>
                Enter the Wurstieverse
              </button>
            </div>
            <div data-type="MobileMenu" className={styles['MobileMenu']}>
              <div className={styles['container02']}>
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className={styles['image']}
                />
                <div
                  data-type="CloseMobileMenu"
                  className={styles['CloseMenu']}
                >
                  <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className={styles['Links-container1']}>
                <span
                  className={` ${styles['Link04']} ${projectStyles['anchor']} `}
                >
                  Resources
                </span>
                <a
                  href="#inspiration"
                  className={` ${styles['Link05']} ${projectStyles['anchor']} `}
                >
                  Inspiration
                </a>
                <span
                  className={` ${styles['Link06']} ${projectStyles['anchor']} `}
                >
                  Process
                </span>
                <a
                  href="#ourstory"
                  className={` ${styles['Link07']} ${projectStyles['anchor']} `}
                >
                  Our story
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['container03']}></div>
      </div>
      <div className={styles['Content-container']}>
        <h1 className={` ${styles['text']} ${projectStyles['header-text']} `}>
          Welcome to the Wurstieverse
        </h1>
        <div className={styles['Hero-text']}>
          <div
            className={` ${styles['container04']} ${projectStyles['section-Text']} `}
          >
            <span
              className={` ${styles['Text01']} ${projectStyles['section-Text']} `}
            >
              <span>
                Poochie Wursts is a collection of 9,999 unique weenies! These
                lovable dachshunds are looking for a furever home with NFT proof
                of ownership on the Ethereum blockchain. Not sure what
                that&apos;s all about? Find out more here: &lt;link&gt;
              </span>
              <span></span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                Poochie Wursts will be going on sale on &lt;DATE&gt;. Click the
                button below to head over to the sale page!
              </span>
              <span>&amp;#8203;</span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles['Section-separator']}></div>
      <div className={styles['container05']}>
        <div id="inspiration" className={styles['Features']}>
          <div className={styles['container06']}>
            <div className={styles['container07']}>
              <img
                alt="image"
                src="../playground_assets/img_0025-300h.png"
                className={styles['image01']}
              />
              <img
                alt="image"
                src="../playground_assets/img_0026-300h.png"
                className={styles['image02']}
              />
              <img
                alt="image"
                src="../playground_assets/img_0027-300h.png"
                className={styles['image03']}
              />
              <img
                alt="image"
                src="../playground_assets/img_0028-300h.png"
                className={styles['image04']}
              />
              <img
                alt="image"
                src="../playground_assets/img_0029-300h.png"
                className={styles['image05']}
              />
            </div>
            <div className={styles['container08']}>
              <img
                alt="image"
                src="../playground_assets/img_0020-300h.png"
                className={styles['image06']}
              />
              <img
                alt="image"
                src="../playground_assets/img_0021-300h.png"
                className={styles['image07']}
              />
              <img
                alt="image"
                src="../playground_assets/img_0022-300h.png"
                className={styles['image08']}
              />
              <img
                alt="image"
                src="../playground_assets/img_0023-300h.png"
                className={styles['image09']}
              />
              <img
                alt="image"
                src="../playground_assets/img_0024-300h.png"
                className={styles['image10']}
              />
            </div>
          </div>
          <div className={styles['container09']}>
            <div className={styles['Heading-container']}>
              <h2
                className={` ${styles['text10']} ${projectStyles['header-text']} `}
              >
                Attributes
              </h2>
            </div>
            <div className={styles['container10']}>
              <span className={styles['text11']}>
                <span className={styles['text12']}>
                  Each Poochie Wurst is created by combining &lt;N&gt;
                  hand-drawn attributes. The total number of possible poochies
                  is &lt;N&gt;!
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text13']}>
                  Some Poochie Wursts are rarer than others - it all depends on
                  their attributes! Don&apos;t forget there are &lt;N&gt;
                  ultra-rare one-of-ones too!
                </span>
              </span>
            </div>
          </div>
          <div className={styles['Cards-container']}>
            <div className={styles['Features-card']}>
              <div className={styles['Icon-container']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className={styles['Text-container']}>
                <span
                  className={` ${styles['Heading']} ${projectStyles['card-Heading']} `}
                >
                  Background
                </span>
                <span
                  className={` ${styles['text14']} ${projectStyles['card-Text']} `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className={styles['Features-card01']}>
              <div className={styles['Icon-container01']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon07']}>
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className={styles['Text-container01']}>
                <span
                  className={` ${styles['Heading01']} ${projectStyles['card-Heading']} `}
                >
                  Fur
                </span>
                <span
                  className={` ${styles['text15']} ${projectStyles['card-Text']} `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className={styles['Features-card02']}>
              <div className={styles['Icon-container02']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon10']}>
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className={styles['Text-container02']}>
                <span
                  className={` ${styles['Heading02']} ${projectStyles['card-Heading']} `}
                >
                  Colour
                </span>
                <span
                  className={` ${styles['text16']} ${projectStyles['card-Text']} `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className={styles['Features-card03']}>
              <div className={styles['Icon-container03']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon13']}>
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className={styles['Text-container03']}>
                <span
                  className={` ${styles['Heading03']} ${projectStyles['card-Heading']} `}
                >
                  Head accessory
                </span>
                <span
                  className={` ${styles['text17']} ${projectStyles['card-Text']} `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className={styles['Features-card04']}>
              <div className={styles['Icon-container04']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon16']}>
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className={styles['Text-container04']}>
                <span
                  className={` ${styles['Heading04']} ${projectStyles['card-Heading']} `}
                >
                  Eyes
                </span>
                <span
                  className={` ${styles['text18']} ${projectStyles['card-Text']} `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className={styles['Features-card05']}>
              <div className={styles['Icon-container05']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon19']}>
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className={styles['Text-container05']}>
                <span
                  className={` ${styles['Heading05']} ${projectStyles['card-Heading']} `}
                >
                  <span>Toy</span>
                </span>
                <span
                  className={` ${styles['text20']} ${projectStyles['card-Text']} `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className={styles['Features-card06']}>
              <div className={styles['Icon-container06']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon22']}>
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className={styles['Text-container06']}>
                <span
                  className={` ${styles['Heading06']} ${projectStyles['card-Heading']} `}
                >
                  Torso
                </span>
                <span
                  className={` ${styles['text21']} ${projectStyles['card-Text']} `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className={styles['Features-card07']}>
              <div className={styles['Icon-container07']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon25']}>
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className={styles['Text-container07']}>
                <span
                  className={` ${styles['Heading07']} ${projectStyles['card-Heading']} `}
                >
                  Back
                </span>
                <span
                  className={` ${styles['text22']} ${projectStyles['card-Text']} `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className={styles['Features-card08']}>
              <div className={styles['Icon-container08']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon28']}>
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className={styles['Text-container08']}>
                <span
                  className={` ${styles['Heading08']} ${projectStyles['card-Heading']} `}
                >
                  Mouth
                </span>
                <span
                  className={` ${styles['text23']} ${projectStyles['card-Text']} `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className={styles['Features-card09']}>
              <div className={styles['Icon-container09']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon31']}>
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className={styles['Text-container09']}>
                <span
                  className={` ${styles['Heading09']} ${projectStyles['card-Heading']} `}
                >
                  Paws
                </span>
                <span
                  className={` ${styles['text24']} ${projectStyles['card-Text']} `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className={styles['Features-card10']}>
              <div className={styles['Icon-container10']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon34']}>
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className={styles['Text-container10']}>
                <span
                  className={` ${styles['Heading10']} ${projectStyles['card-Heading']} `}
                >
                  Collar
                </span>
                <span
                  className={` ${styles['text25']} ${projectStyles['card-Text']} `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className={styles['Features-card11']}>
              <div className={styles['Icon-container11']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon37']}>
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className={styles['Text-container11']}>
                <span
                  className={` ${styles['Heading11']} ${projectStyles['card-Heading']} `}
                >
                  Butthole!?
                </span>
                <span
                  className={` ${styles['text26']} ${projectStyles['card-Text']} `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['Section-separator1']}></div>
      <div className={styles['Steps']}>
        <div className={styles['container11']}>
          <h1
            className={` ${styles['text27']} ${projectStyles['header-text']} `}
          >
            <span>Walkies!</span>
          </h1>
          <div className={styles['container12']}>
            <span className={styles['text29']}>
              We will do different things as we sell out...
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
        <div className={styles['container13']}>
          <div className={styles['Step']}>
            <div className={styles['container14']}>
              <div className={styles['Line']}></div>
              <div className={styles['container15']}>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className={styles['icon40']}
                >
                  <path d="M736 369.714c21.143 0 42.286 4 61.143 13.143 54.857 24.571 80.571 69.714 80.571 129.143v101.143c0 36-4.571 72-13.143 106.286l-48.571 193.714c-16 65.143-74.286 110.857-141.714 110.857h-381.714c-80.571 0-146.286-65.714-146.286-146.286v-229.143l-136.571-358.857c-6.286-16.571-9.714-34.286-9.714-52 0-80.571 65.714-146.286 146.286-146.286 60.571 0 115.429 37.714 136.571 94.286l9.714 25.143v-64.571c0-80.571 65.714-146.286 146.286-146.286s146.286 65.714 146.286 146.286v149.143c9.143-1.714 18.286-2.857 27.429-2.857 52.571 0 100.571 30.286 123.429 77.143zM612.571 365.714c-25.143 0-48 14.857-58.286 37.714l-42.286 93.143-40.571 88.571h31.429c38.286 0 72 26.857 80 64l88-193.143c4-8 5.714-17.143 5.714-26.286 0-35.429-28.571-64-64-64zM738.857 442.857c-43.429 0-57.143 34.857-72.571 69.143l-75.429 165.714c-4 8-5.714 17.143-5.714 26.286 0 35.429 28.571 64 64 64 25.143 0 48-14.857 58.286-37.714l91.429-201.143c2.857-5.714 5.143-14.857 5.143-21.714 0-38.286-27.429-64.571-65.143-64.571zM73.143 237.714c0 9.143 1.714 17.714 4.571 26.286l141.714 371.429v39.429l58.286-63.429c15.429-16.571 37.714-26.286 60.571-26.286h113.143l60.571-133.143v-305.714c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143v365.714h-36.571l-114.286-300.571c-10.857-28-38.286-46.857-68.571-46.857-40.571 0-73.143 33.143-73.143 73.143zM674.286 950.857c33.714 0 62.857-22.857 70.857-55.429l48.571-193.714c7.429-28.571 10.857-58.857 10.857-88.571v-52l-80.571 177.143c-13.143 29.143-42.857 48-74.857 48-40 0-74.857-29.143-81.143-69.143-15.429 20-39.429 32.571-65.143 32.571h-118.857v-18.286h118.857c34.857 0 66.286-28.571 66.286-64 0-34.857-26.286-64-61.714-64h-169.143c-17.714 0-34.857 7.429-46.857 20.571l-72 77.714v176c0 40.571 32.571 73.143 73.143 73.143h381.714z"></path>
                </svg>
              </div>
              <div className={styles['Line1']}></div>
            </div>
            <div className={styles['container16']}>
              <h1 className={styles['text30']}>
                <span>25%</span>
              </h1>
              <span className={styles['text32']}>
                <span>Charity donation</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className={styles['container17']}>
            <div className={styles['Step1']}>
              <div className={styles['container18']}>
                <div className={styles['Line2']}></div>
                <div className={styles['container19']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon42']}>
                    <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                  </svg>
                </div>
                <div className={styles['Line3']}></div>
              </div>
            </div>
            <div className={styles['container20']}>
              <h1 className={styles['text35']}>
                <span>50%</span>
              </h1>
              <span className={styles['text37']}>
                Special discord
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div className={styles['Step2']}></div>
          <div className={styles['Step3']}>
            <div className={styles['container21']}>
              <div className={styles['Line4']}></div>
              <div className={styles['container22']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon44']}>
                  <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                </svg>
              </div>
              <div className={styles['Line5']}></div>
            </div>
            <div className={styles['container23']}>
              <h1 className={styles['text38']}>
                <span>75%</span>
              </h1>
              <span className={styles['text40']}>
                Teaser design for upcoming airdrop
              </span>
            </div>
          </div>
          <div className={styles['Step4']}>
            <div className={styles['container24']}>
              <div className={styles['Line6']}></div>
              <div className={styles['container25']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon46']}>
                  <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                </svg>
              </div>
              <div className={styles['Line7']}></div>
            </div>
            <div className={styles['container26']}>
              <h1 className={styles['text41']}>
                <span>100%</span>
              </h1>
              <span className={styles['text43']}>
                <span>The fun begins!</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['container27']}>
        <div className={styles['Team']}>
          <div className={styles['Heading-container1']}>
            <h1
              className={` ${styles['text45']} ${projectStyles['header-text']} ${projectStyles['section-Heading']} `}
            >
              The Ween Team
            </h1>
          </div>
          <div className={styles['Cards-container1']}>
            <div className={styles['Team-card']}>
              <div className={styles['Avatar-container']}></div>
              <span
                className={` ${styles['Name']} ${projectStyles['card-Heading']} `}
              >
                <span>Pickles</span>
              </span>
              <span
                className={` ${styles['Position']} ${projectStyles['card-Text']} `}
              >
                Creator
              </span>
            </div>
            <div className={styles['Team-card1']}>
              <div className={styles['Avatar-container1']}></div>
              <span
                className={` ${styles['Name1']} ${projectStyles['card-Heading']} `}
              >
                Frank Furter
              </span>
              <span
                className={` ${styles['Position1']} ${projectStyles['card-Text']} `}
              >
                Web Designer
              </span>
            </div>
            <div className={styles['Team-card2']}>
              <div className={styles['Avatar-container2']}></div>
              <span
                className={` ${styles['Name2']} ${projectStyles['card-Heading']} `}
              >
                Mr C. Land
              </span>
              <span
                className={` ${styles['Position2']} ${projectStyles['card-Text']} `}
              >
                Smart Contract Engineer
              </span>
            </div>
            <div className={styles['Team-card3']}>
              <div className={styles['Avatar-container3']}></div>
              <span
                className={` ${styles['Name3']} ${projectStyles['card-Heading']} `}
              >
                <span>H Dog</span>
              </span>
              <span
                className={` ${styles['Position3']} ${projectStyles['card-Text']} `}
              >
                Community Manager
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['Section-separator2']}></div>
      <div id="ourstory" className={styles['Our-story']}>
        <div className={styles['Heading-container2']}>
          <h1
            className={` ${styles['text48']} ${projectStyles['section-Heading']} ${projectStyles['header-text']} `}
          >
            Supporting the Wursts
          </h1>
          <span
            className={` ${styles['text49']} ${projectStyles['section-Text']} `}
          >
            Whether they&apos;re walkin&apos; or wheelin&apos; all weenies
            deserve a good home!
          </span>
        </div>
        <div className={styles['Cards-container2']}>
          <div className={styles['Left-section']}>
            <div className={styles['Video-container']}>
              <video className={styles['video']}></video>
              <div className={styles['Play-container']}>
                <svg viewBox="0 0 1024 1024" className={styles['Icon48']}>
                  <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM426 704v-384l256 192z"></path>
                </svg>
              </div>
            </div>
            <div className={styles['Content-container1']}>
              <span
                className={` ${styles['Heading12']} ${projectStyles['card-Heading']} `}
              >
                This text is the name of the article. Lorem ipsum dolor sit
                metsed do eiusm od tempor.
              </span>
              <span
                className={` ${styles['text50']} ${projectStyles['card-Text']} `}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </span>
              <span
                className={` ${styles['text51']} ${projectStyles['card-Text']} `}
              >
                {' '}
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
              </span>
              <span className={projectStyles['anchor']}>Read more</span>
            </div>
            <div className={styles['Info-container']}>
              <span className={projectStyles['card-Text']}>12 Apr 2021</span>
              <div className={styles['Stats-container']}>
                <div className={styles['Messages-container']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon50']}>
                    <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
                  </svg>
                  <span className={projectStyles['card-Text']}>123</span>
                </div>
                <div className={styles['Views-container']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon52']}>
                    <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                  </svg>
                  <span className={projectStyles['card-Text']}>4567</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['Right-section']}>
            <div className={styles['Card']}>
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className={styles['image11']}
              />
              <div className={styles['Content-container2']}>
                <span
                  className={` ${styles['text54']} ${projectStyles['smallCard-Heading']} `}
                >
                  This text is the name of the article. Lorem ipsum dolor sit
                  metsed ...
                </span>
                <span className={projectStyles['anchor']}>Read more</span>
              </div>
              <div className={styles['Info-container1']}>
                <span className={projectStyles['card-Text']}>12 Apr 2021</span>
                <div className={styles['Stats-container1']}>
                  <div className={styles['Messages-container1']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon54']}>
                      <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
                    </svg>
                    <span className={projectStyles['card-Text']}>123</span>
                  </div>
                  <div className={styles['Views-container1']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon56']}>
                      <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                    </svg>
                    <span className={projectStyles['card-Text']}>4567</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['Card1']}>
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className={styles['image12']}
              />
              <div className={styles['Content-container3']}>
                <span
                  className={` ${styles['text57']} ${projectStyles['smallCard-Heading']} `}
                >
                  This text is the name of the article. Lorem ipsum dolor sit
                  metsed ...
                </span>
                <span className={projectStyles['anchor']}>Read more</span>
              </div>
              <div className={styles['Info-container2']}>
                <span className={projectStyles['card-Text']}>12 Apr 2021</span>
                <div className={styles['Stats-container2']}>
                  <div className={styles['Messages-container2']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon58']}>
                      <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
                    </svg>
                    <span className={projectStyles['card-Text']}>123</span>
                  </div>
                  <div className={styles['Views-container2']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon60']}>
                      <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                    </svg>
                    <span className={projectStyles['card-Text']}>4567</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['Card2']}>
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className={styles['image13']}
              />
              <div className={styles['Content-container4']}>
                <span
                  className={` ${styles['text60']} ${projectStyles['smallCard-Heading']} `}
                >
                  This text is the name of the article. Lorem ipsum dolor sit
                  metsed ...
                </span>
                <span className={projectStyles['anchor']}>Read more</span>
              </div>
              <div className={styles['Info-container3']}>
                <span className={projectStyles['card-Text']}>12 Apr 2021</span>
                <div className={styles['Stats-container3']}>
                  <div className={styles['Messages-container3']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon62']}>
                      <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
                    </svg>
                    <span className={projectStyles['card-Text']}>123</span>
                  </div>
                  <div className={styles['Views-container3']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon64']}>
                      <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                    </svg>
                    <span className={projectStyles['card-Text']}>4567</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['Card3']}>
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className={styles['image14']}
              />
              <div className={styles['Content-container5']}>
                <span
                  className={` ${styles['text63']} ${projectStyles['smallCard-Heading']} `}
                >
                  This text is the name of the article. Lorem ipsum dolor sit
                  metsed ...
                </span>
                <span className={projectStyles['anchor']}>Read more</span>
              </div>
              <div className={styles['Info-container4']}>
                <span className={projectStyles['card-Text']}>12 Apr 2021</span>
                <div className={styles['Stats-container4']}>
                  <div className={styles['Messages-container4']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon66']}>
                      <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
                    </svg>
                    <span className={projectStyles['card-Text']}>123</span>
                  </div>
                  <div className={styles['Views-container4']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon68']}>
                      <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                    </svg>
                    <span className={projectStyles['card-Text']}>4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['section-separator3']}></div>
      <div className={styles['section-separator4']}></div>
      <div className={styles['Footer-container']}>
        <div className={styles['Footer']}>
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className={styles['icon70']}
          >
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className={styles['icon72']}
          >
            <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
          </svg>
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className={styles['icon74']}
          >
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Home
