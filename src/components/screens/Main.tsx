import { FC, useEffect, useState } from "react";
import styles from "./Main.module.scss";
import VK from "../../assets/VK.svg";
import logo from "../../assets/logo.svg";
import { useMediaQuery } from "../../hooks";
import { Link } from "react-scroll";

interface IHeader {
  headerColor?: string;
}

const Header: FC<IHeader> = ({ headerColor }) => {
  const isMedia = useMediaQuery(500);
  if (isMedia) {
    return <MobileHeader />;
  }
  return (
    <header
      className={`${styles.header} ${headerColor ? styles.headerScrolled : ""}`}
    >
      <nav className="flex justify-center">
        <ul className="flex justify-center">
          <li>
            <Link smooth={true} offset={-50} duration={500} to="courses">
              Курсы
            </Link>
          </li>
          <li>
            <Link smooth={true} offset={-50} duration={500} to="contacts">
              Контакты
            </Link>
          </li>
          <li>
            <img
              className="w-10 relative top-[-5px]"
              alt="Шахматная школа Erathia"
              src={logo}
            />
          </li>
          <li>
            <Link smooth={true} offset={-60} duration={500} to="aboutus">
              О нас
            </Link>{" "}
          </li>
          <li>
            <Link smooth={true} offset={-50} duration={500} to="events">
              Мероприятия
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const MobileHeader: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.headerAdaptive}>
      <div className={styles.headerAdaptiveTop}>
        <div
          onDoubleClick={() => {
            setIsOpen(!isOpen);
          }}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`${styles.headerAdaptiveBurger} ${
            isOpen ? styles.isOpen : ""
          }`}
        >
          {isOpen ? (
            <>
              <span />
              <span />
            </>
          ) : (
            <>
              <span />
              <span />
              <span />
            </>
          )}
        </div>
      </div>
      <div
        className={`${styles.headerAdaptiveContent} ${
          isOpen ? styles.isOpen : ""
        }`}
      >
        <nav className="pt-20">
          <ul className="flex flex-col gap-4 font-semibold text-white text-xl pl-4">
            <li>
              <img className="w-10" alt="Шахматная школа Erathia" src={logo} />
            </li>
            <li>
              <Link
                smooth={true}
                onClick={() => {
                  setIsOpen(false);
                }}
                offset={-60}
                duration={500}
                to="aboutus"
              >
                О нас
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                smooth={true}
                offset={-50}
                duration={500}
                to="courses"
              >
                Курсы
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                smooth={true}
                offset={-50}
                duration={500}
                to="events"
              >
                Мероприятия
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                smooth={true}
                offset={-50}
                duration={500}
                to="contacts"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

interface ILink {
  href?: string;
  title: string;
}

const FooterLink: FC<ILink> = ({
  title,
  href = "https://vk.com/erathia_chess",
}) => {
  return (
    <li>
      <a href={href} target="_blank">
        {title}
      </a>
    </li>
  );
};

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>Компания</h3>
        <ul>
          <FooterLink title="О нас" />
          <FooterLink title="Команда" />
          <FooterLink title="Связаться м нами" />
        </ul>
      </div>
      <div>
        <h3>Сообщество</h3>
        <ul>
          <FooterLink title="FAQ: Вопросы и ответы" />
          <FooterLink title="Присоединяйтесь к нам" />
          <FooterLink title="Обратная связь" />
        </ul>
      </div>
      <div>
        <h3>Условие пользования</h3>
        <ul>
          <FooterLink title="Политика конфиденциальности" />
          <FooterLink title="Пользовательское соглашение" />
        </ul>
      </div>
      <div>
        <h3>Мы в соцсетях</h3>
        <ul>
          <li>
            <a href="https://vk.com/erathia_chess" target="_blank">
              <img alt="логотип VK" src={VK} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const Contacts: FC = () => {
  return (
    //@ts-ignore
    <section name="contacts" className={styles.contacts}>
      <div className={styles.contactsInfo}>
        <h3>Контакты</h3>
        <h2 className="text-center">Свяжитесь с нами</h2>
        <p>
          Для получения подробной информации и записи на пробное занятие
          свяжитесь с нами любым удобным для Вас способом
        </p>
        <ul>
          <li>
            <a href="mailto: erathia-chess@gmail.com" target="_blank">
              <span>EMAIL:</span> erathia-chess@gmail.com
            </a>
          </li>
          <li>
            <a target="_blank" href="tel:89159724970">
              <span>Телефон:</span> +79159724970
            </a>
          </li>
          <li>
            <a target="_blank" href="https://wa.me/+79956338480">
              <span>Whatsapp:</span> +79956338480
            </a>
          </li>
          <li>
            <a target="_blank" href="https://msng.link/o?79956338480=vi">
              <span>Viber:</span> +79956338480
            </a>
          </li>
          <li>
            <a target="_blank" href="https://t.me/Erathi">
              <span>Telegram:</span> +79956338480
            </a>
          </li>
          <li>
            <a target="_blank" href="https://vk.com/erathia_chess">
              <span>VK:</span> Шахматный клуб эрафия
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.contactsMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28970.378258520876!2d39.810421528503184!3d57.636120949642894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b291688690a2c7%3A0x1ac28a60c894c2b8!2z0KHQvtCy0LXRgtGB0LrQsNGPINGD0LsuLCAzMiwg0K_RgNC-0YHQu9Cw0LLQu9GMLCDQr9GA0L7RgdC70LDQstGB0LrQsNGPINC-0LHQuy4sIDE1MDAwMw!5e0!3m2!1sru!2sru!4v1695036048936!5m2!1sru!2sru"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

interface IRegisterButton {
  setIsVisible: (val: boolean) => void;
}

const RegisterButton: FC<IRegisterButton> = ({ setIsVisible }) => {
  if (useMediaQuery(600)) {
    return (
      <button className={styles.registerButton}>
        <Link offset={-50} smooth={true} duration={1000} to="mobileform">
          Записаться
        </Link>
      </button>
    );
  }
  return (
    <button
      onClick={() => {
        setIsVisible(true);
      }}
      className={styles.registerButton}
    >
      Записаться
    </button>
  );
};

const InfoRegisterButton: FC<IRegisterButton> = ({ setIsVisible }) => {
  if (useMediaQuery(600)) {
    return (
      <button className={styles.infoRegisterButton}>
        <Link offset={-50} smooth={true} duration={1000} to="mobileform">
          Записаться
        </Link>
      </button>
    );
  }
  return (
    <button
      className={styles.infoRegisterButton}
      onClick={() => {
        setIsVisible(true);
      }}
    >
      Записаться
    </button>
  );
};

const HeroSection: FC<IRegisterButton> = ({ setIsVisible }) => {
  return (
    <main className={styles.main}>
      <div className={styles.mainDescr}>
        <div>Знакомим всех желающих с увлекательным миром шахмат</div>
        <div>Развивай ум играя в шахматы</div>
      </div>
      <RegisterButton setIsVisible={setIsVisible} />
    </main>
  );
};

const InformationSection: FC<IRegisterButton> = ({ setIsVisible }) => {
  return (
    <section className={styles.info}>
      <div className={styles.infoHeading}>
        <p>что мы предлагаем</p>
        <h2>Выберите свой Курс</h2>
        <div></div>
      </div>
      /* @ts-ignore */
      <div data-name="courses" className={styles.infoCardWrapper}>
        <div className={styles.firstCard}>
          <h1>Индивидуальные занятия</h1>
          <p>
            Занимаемся один на один без посторонних. Всё внимание к одному
            ученику. Длительность занятий зависит от возраста ребенка.
          </p>
          <InfoRegisterButton setIsVisible={setIsVisible} />
        </div>
        <div className={styles.secondCard}>
          <h1>Групповые занятия для детей 5-7 лет</h1>
          <p>Занятия по 50 минут для групп до 4 человек.</p>
          <InfoRegisterButton setIsVisible={setIsVisible} />
        </div>
        <div className={styles.thirdCard}>
          <h1>Групповые занятия для детей от 7 лет</h1>
          <p>Занятия по 60 минут для групп до 6 человек.</p>
          <InfoRegisterButton setIsVisible={setIsVisible} />
        </div>
      </div>
      <div className={styles.infoSecondCardWrapper}>
        <div className={styles.fourthCard}>
          <div></div>
          <h3 className="text-center">История</h3>
          <p>
            Наш шахматный клуб начал работать с зимы 2023 года. За это время
            несколько десятков учеников прошли путь от начинающих до продвинутых
            шахматистов, претендующих на юношиские и взрослые разряды. В данный
            момент, лучшие ученики клуба начинают свои выступления на
            региональных чемпионатах Ярославской области.
          </p>
          <h4 className="ml-6 mt-8">Эрафия</h4>
          <h4 className="ml-16">Успей и ты!</h4>
        </div>
        <div className={styles.fifthCard}>
          //@ts-ignore
          <div data-name="aboutus" className={styles.infoHeading}>
            <p>Erathia</p>
            <h2>о нас</h2>
            <div></div>
          </div>
          <div>
            <p>
              <strong>Эрафия</strong>- это онлайн школа по шахматам для детей и
              взрослых.
            </p>
            <h4 className="my-4">Почему у нас лучше:</h4>
            <ul>
              <li>Стоимость занятий ниже, чем у конкурентов на 15-30%</li>
              <li>Собственная методика обучения</li>
              <li>Возможность пропускать занятия без потери средств</li>
              <li>Бесплатные еженедельные онлайн турниры</li>
              <li>Шахматный инвентарь высшего качества</li>
              <li>Удобное местоположение</li>
              <li>Внеклассная помощь с обучением</li>
            </ul>
          </div>
        </div>
        <div className={styles.fourthCard}>
          <div></div>
          <h3 className="text-center">Турниры</h3>
          <p>
            На базе нашего клуба регулярно проводятся шахматные турниры с
            различными временными контролями от блица до классических шахмат с
            записью партий, к участию в турнирах допускаются все желающие. Во
            время турниров участникам предоставляется шахматный инвентарь
            (Шахматы, шахматные часы, канцелярия) отличного качества, который
            обеспечит ученикам максимальное погружение в процесс и комфортную
            игру.
          </p>
          <h4 className="ml-6 mt-8">Эрафия</h4>
          <h4 className="ml-16">Успей и ты!</h4>
        </div>
      </div>
    </section>
  );
};

const Announcements: FC = () => {
  return (
    //@ts-ignore
    <section name="events" className={styles.announcement}>
      <div>
        <div className="flex flex-col gap-1">
          <h2>анонсы мероприятий</h2>
          <p>
            Примите участие в первом клубном турнире по быстрым шахматам и
            получите возможность побороться за ценные призы!
          </p>
          <div>
            Актуальную дату можно узнать в{" "}
            <a
              href="https://vk.com/erathia_chess"
              target="_blank"
              className="underline"
            >
              группе ВК
            </a>
          </div>
          <div>
            Быстрые шахматы (контроль 10 минут на партию + 5 секунд добавления
            за ход) - идеальный баланс между вдумчивым стилем классических
            шахмат и стремительностью блиц-шахмат!
          </div>
          <div className="font-semibold">Чтобы участвовать, необходимо:</div>
          <ul>
            <li>
              Вступить в группу{" "}
              <a
                href="https://vk.com/erathia_chess"
                target="_blank"
                className="text-[#3949A0]"
              >
                VK шахматного клуба Эрафия
              </a>
            </li>
            <li>
              Заполнить форму
              <a
                href="https://vk.com/erathia_chess"
                target="_blank"
                className="text-[#3949A0]"
              >
                регистрации
              </a>{" "}
              и нажать кнопку «участвовать»
            </li>
          </ul>
        </div>
        <div className={styles.announcementImg}></div>
      </div>
    </section>
  );
};

interface IRegisterFormProps {
  isVisible: boolean;
  setIsVisible: (val: boolean) => void;
}

type EducationType = "Группа" | "Мини-группа" | "Индивидуальный";

const RegisterForm: FC<IRegisterFormProps> = ({ isVisible, setIsVisible }) => {
  const educationTypes: Array<EducationType> = [
    "Группа",
    "Мини-группа",
    "Индивидуальный",
  ];
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [educationType, setEducationType] =
    useState<EducationType>("Индивидуальный");
  const [isVisibleEducationType, setIsVisibleEducationType] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+7");
  const [description, setDescription] = useState("");
  //@ts-ignore
  const [isVisibleResult, setIsVisibleResult] = useState(false);
  const url =
    "https://api.telegram.org/bot6616108346:AAEwnbzKeeol025spq1tnPljulevsMf5NlU/sendMessage?chat_id=-1001815006447&parse_mode=html";
  const handleSubmitForm = () => {
    const textContent =
      "<b>Имя</b>: " +
      name +
      "%0A<b>Фамилия</b>: " +
      surname +
      "%0A<b>Возраст</b>: " +
      age +
      "%0A<b>Тип обучения</b>: " +
      educationType +
      "%0A<b>Номер телефона</b>: " +
      phoneNumber +
      "%0A<b>О себе</b>: " +
      description;
    fetch(`${url}&text=${textContent}`, {
      method: "POST",
      headers: {},
    })
      .then(() => {
        setIsVisibleResult(true);
      })
      .catch((error) => {
        error;
      });
  };
  const handlerClose = () => {
    setIsVisible(false);
  };
  return (
    <div
      className={`text-white w-[600px] max-w-[600px] fixed z-[100] bg-[#3949A0] flex flex-col items-center h-screen py-8 px-5 duration-700 transition-transform ${
        isVisible ? `translate-x-0` : `translate-x-[-600px]`
      }`}
    >
      <div className={"flex items-center justify-center"}>
        <h2 className={`font-bold sm:max-w-none text-xl self-center`}>
          Записаться на пробное занятие
        </h2>
        <div
          className={
            "cursor-pointer select-none hidden sm:block relative sm:top-[-10px] top-[-30px] right-[-100px] sm:right-[-80px] self-end"
          }
          onTouchStart={() => {
            setIsVisible(false);
          }}
          onClick={handlerClose}
        >
          <span
            className={
              "rotate-45 translate-x-[1px] translate-y-[4px] h-1 w-6 block bg-white"
            }
          />
          <span
            className={`rotate-[-45deg] translate-x-[1px] translate-y-[0px] h-1 w-6 block bg-white`}
          />
        </div>
      </div>
      <form className={`flex flex-col justify-center pt-5 gap-4`}>
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5`}>
          <div>
            <div className={`leading-none text-xs`}>Имя</div>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className={`text-lg text-black focus:outline-none px-2 py-1 leading-none`}
            />
          </div>
          <div>
            <div className={`leading-none text-xs`}>Фамилия</div>
            <input
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
              }}
              className={`text-lg text-black focus:outline-none w-full px-2 py-1 leading-none`}
            />
          </div>
        </div>
        <div className={`min-w-full`}>
          <div className={`leading-none text-xs`}>Сколько тебе лет?</div>
          <input
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            className={`text-lg text-black focus:outline-none px-2 py-1 leading-none block w-full`}
          />
        </div>
        <div className={"relative"}>
          <div className={`leading-none text-xs`}>Поход к обучению</div>
          <div
            onClick={() => {
              setIsVisibleEducationType(!isVisibleEducationType);
            }}
            className={`bg-white text-black px-2 py-1 cursor-pointer`}
          >
            {educationType}
          </div>
          <div
            className={`${
              isVisibleEducationType ? `flex` : "hidden"
            } absolute top-12 w-full z-[102] bg-white text-black flex-col`}
          >
            {educationTypes.map((item, idx) => (
              <div
                key={idx}
                className={`hover:bg-slate-100 px-2 py-2 cursor-pointer`}
                onClick={() => {
                  setEducationType(item);
                  setIsVisibleEducationType(false);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={`leading-none text-xs`}>Номер телефона</div>
          <input
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            className={`text-lg text-black focus:outline-none w-full px-2 py-1 leading-none`}
          />
        </div>
        <div>
          <div className={`leading-none text-xs`}>Предыдущий опыт</div>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className={`text-lg text-black focus:outline-none w-full px-2 py-1 leading-none`}
          />
        </div>
        <div className="max-w-[250px] sm:max-w-none leading-none text-center">
          отправляя форму вы соглашаетесь с{" "}
          <a
            href="https://vk.com/erathia_chess"
            className="underline"
            target="_blank"
          >
            политикой конфиденциальности
          </a>
        </div>
        <button
          onClick={async (e) => {
            e.preventDefault();
            handleSubmitForm();
          }}
          className={`text-[#3949A0] font-semibold bg-white px-3 py-2`}
        >
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

const MobileRegisterForm: FC = () => {
  const educationTypes: Array<EducationType> = [
    "Группа",
    "Мини-группа",
    "Индивидуальный",
  ];
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [educationType, setEducationType] =
    useState<EducationType>("Индивидуальный");
  const [isVisibleEducationType, setIsVisibleEducationType] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+7");
  const [description, setDescription] = useState("");
  //@ts-ignore
  const [isVisibleResult, setIsVisibleResult] = useState(false);
  const url =
    "https://api.telegram.org/bot6616108346:AAEwnbzKeeol025spq1tnPljulevsMf5NlU/sendMessage?chat_id=-1001815006447&parse_mode=html";
  const handleSubmitForm = () => {
    const textContent =
      "<b>Имя</b>: " +
      name +
      "%0A<b>Фамилия</b>: " +
      surname +
      "%0A<b>Возраст</b>: " +
      age +
      "%0A<b>Тип обучения</b>: " +
      educationType +
      "%0A<b>Номер телефона</b>: " +
      phoneNumber +
      "%0A<b>О себе</b>: " +
      description;
    fetch(`${url}&text=${textContent}`, {
      method: "POST",
      headers: {},
    })
      .then(() => {
        setIsVisibleResult(true);
      })
      .catch((error) => {
        error;
      });
  };
  return (
    //@ts-ignore
    <div
      //@ts-ignore
      name="mobileform"
      className={`text-white w-[600px] max-w-full bg-[#3949A0] flex flex-col items-center py-8 px-5 duration-700 transition-transform`}
    >
      <div className={"flex items-center justify-center"}>
        <h2 className={`font-bold sm:max-w-none text-xl self-center`}>
          Записаться на пробное занятие
        </h2>
        <div
          className={
            "cursor-pointer select-none hidden sm:block relative sm:top-[-10px] top-[-30px] right-[-100px] sm:right-[-80px] self-end"
          }
        >
          <span
            className={
              "rotate-45 translate-x-[1px] translate-y-[4px] h-1 w-6 block bg-white"
            }
          />
          <span
            className={`rotate-[-45deg] translate-x-[1px] translate-y-[0px] h-1 w-6 block bg-white`}
          />
        </div>
      </div>
      <form className={`flex flex-col justify-center pt-5 gap-4`}>
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5`}>
          <div>
            <div className={`leading-none text-xs`}>Имя</div>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className={`text-lg text-black focus:outline-none w-full px-2 py-1 leading-none`}
            />
          </div>
          <div className="w-full">
            <div className={`leading-none text-xs`}>Фамилия</div>
            <input
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
              }}
              className={`text-lg text-black focus:outline-none w-full px-2 py-1 leading-none`}
            />
          </div>
        </div>
        <div className={`min-w-full`}>
          <div className={`leading-none text-xs`}>Сколько тебе лет?</div>
          <input
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            className={`text-lg text-black focus:outline-none px-2 py-1 leading-none block w-full`}
          />
        </div>
        <div className={"relative"}>
          <div className={`leading-none text-xs`}>Поход к обучению</div>
          <div
            onClick={() => {
              setIsVisibleEducationType(!isVisibleEducationType);
            }}
            className={`bg-white text-black px-2 py-1 cursor-pointer`}
          >
            {educationType}
          </div>
          <div
            className={`${
              isVisibleEducationType ? `flex` : "hidden"
            } absolute top-12 w-full z-[102] bg-white text-black flex-col`}
          >
            {educationTypes.map((item, idx) => (
              <div
                key={idx}
                className={`hover:bg-slate-100 px-2 py-2 cursor-pointer`}
                onClick={() => {
                  setEducationType(item);
                  setIsVisibleEducationType(false);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={`leading-none text-xs`}>Номер телефона</div>
          <input
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            className={`text-lg text-black focus:outline-none w-full px-2 py-1 leading-none`}
          />
        </div>
        <div>
          <div className={`leading-none text-xs`}>Предыдущий опыт</div>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className={`text-lg text-black focus:outline-none w-full px-2 py-1 leading-none`}
          />
        </div>
        <div className="max-w-[250px] sm:max-w-none leading-none text-center">
          отправляя форму вы соглашаетесь с{" "}
          <a
            href="https://vk.com/erathia_chess"
            className="underline"
            target="_blank"
          >
            политикой конфиденциальности
          </a>
        </div>
        <button
          onClick={async (e) => {
            e.preventDefault();
            handleSubmitForm();
          }}
          className={`text-[#3949A0] font-semibold bg-white px-3 py-2`}
        >
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

const MainPage: FC = () => {
  const isMedia = useMediaQuery(500);
  const [headerColor, setHeaderColor] = useState("");
  useEffect(() => {
    const getWindowHeight = window.screen.height;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > getWindowHeight) {
        setHeaderColor("headerScrolled");
      } else {
        setHeaderColor("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isVisibleRegister, setIsVisibleRegister] = useState(false);

  return (
    <div>
      {isMedia ? <MobileHeader /> : <Header headerColor={headerColor} />}
      <RegisterForm
        isVisible={isVisibleRegister}
        setIsVisible={setIsVisibleRegister}
      />
      <HeroSection setIsVisible={setIsVisibleRegister} />
      <InformationSection setIsVisible={setIsVisibleRegister} />
      <Announcements />
      <Contacts />
      {isMedia && <MobileRegisterForm />}
      <Footer />
    </div>
  );
};

export default MainPage;
