import React, {useState, useContext, useEffect} from "react";
import Vacancies from "../Vacancies/Vacancies";
import "./Home.css"
import logo from "../images/logo-form.png";
import arrow from "../images/Arrow 1.svg";
import arrowRight from "../images/ArrowRight.svg";
import {useForm} from "react-hook-form";
import Footer from "../Footer/footer";
import {UserContext} from "../../UserContext";
import Students from "../Students/Students";
const Home = () => {
    const [currentUser, setCurrentUser] = useState({})
    const [show,setShow] = useState(false);
    const [show2,setShow2] = useState(false);
    const [show3,setShow3] = useState(false);
    const [show4,setShow4] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const selectAll = watch('selectAll');

        const parseJwt = token => {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };

    const get_user = async () => {
        const access = localStorage.getItem("access");
        if (!access) {
            return {}
        } else {
            const decoded_token = parseJwt(access);
            let response = await fetch(`http://${process.env.REACT_APP_API_URL}/api/users/${decoded_token.user_id}`)
            let data =  await response.json();
            if (response.status === 200) {
                setCurrentUser(data);
            }
        }
    };

    useEffect(() => {
        get_user();
    }, [])

    console.log(currentUser)
    console.log(process.env.REACT_APP_API_URL)
    return (
        <div>
            <div className="homePage">
                <div className="sidebar_name">
                <div className="sidebarSearch">
                    <h2 className="sidebar_title">
                        Условия поиска
                    </h2>
                </div>
                <div className="sidebar_filter">
                    <nav className="sidebar_menu">
                        <ul className="sidebar_menu_list">
                            <li>
                                {
                                    <ul className="sidebar_submenu">
                                        <div className="sidebar-link" onClick={()=> setShow2(!show2)}>
                                                Направление
                                                {
                                            show2 ?
                                        <img onClick={()=> setShow2(!show2)} className="sidebar_arrow" src={arrow}/>:
                                        <img onClick={()=> setShow2(!show2)} className="sidebar_arrow" src={arrowRight}/>
                                    }
                                        </div>
                                        {
                                            show2 &&
                                            <ul className="submenu-list">
                                               <li className="sidebar-link">
                                                   <div className="linkFirst">
                                                        <input type="checkbox"/>
                                                      Аналитика
                                                   </div>
                                               </li>
                                                 <li className="sidebar-link">
                                                    <div className="linkFirst">
                                                        <input type="checkbox"/>
                                                      UX/UI дизайн
                                                   </div>
                                               </li>
                                                <li className="sidebar-link">
                                                    <div className="linkFirst">
                                                        <input type="checkbox"/>
                                                      Проектный/продуктовый менеджмент
                                                   </div>
                                                </li>
                                                <li className="sidebar-link">
                                                    <div className="linkFirst">
                                                        <input type="checkbox"/>
                                                      Разработка
                                                   </div>
                                                </li>
                                                 <li className="sidebar-link">
                                                    <div className="linkFirst">
                                                        <input type="checkbox"/>
                                                      Системное администрирование
                                                   </div>
                                                </li>
                                                <li className="sidebar-link">
                                                    <div className="linkFirst">
                                                        <input type="checkbox"/>
                                                      Техническая поддержка
                                                   </div>
                                                </li>
                                                <li className="sidebar-link">
                                                    <div className="linkFirst">
                                                        <input type="checkbox"/>
                                                      Тестирование
                                                   </div>
                                                </li>
                                            </ul>
                                        }

                                </ul>
                                }
                            </li>
                            <li>
                                <div onClick={()=> setShow3(!show3)} className="sidebar-link">
                                    График
                                     {
                                        show3 ?
                                        <img className="sidebar_arrow" src={arrow}/>:
                                        <img className="sidebar_arrow" src={arrowRight}/>
                                    }
                                </div>
                                {
                                            show3 &&
                                            <ul className="sub-submenu-list">
                                               <li>
                                                    <input type="checkbox"/>
                                                  Полный день
                                               </li>
                                                 <li>
                                                    <input type="checkbox"/>
                                                    Сменный график
                                               </li>
                                                <li>
                                                    <input type="checkbox"/>
                                                    Вахтовый метод
                                                </li>
                                                <li>
                                                    <input type="checkbox"/>
                                                    Удаленная работа
                                                </li>
                                                 <li>
                                                    <input type="checkbox"/>
                                                    Гибкий график
                                                </li>
                                            </ul>
                                        }

                            </li>
                            <li>
                                <a onClick={()=> setShow4(!show4)}  className="sidebar-link">
                                    Город
                                    {
                                        show4 ?
                                        <img className="sidebar_arrow" src={arrow}/>:
                                        <img className="sidebar_arrow" src={arrowRight}/>
                                    }
                                </a>
                                {
                                            show4 &&
                                            <ul className="sub-submenu-list">
                                               <li>
                                                    <input type="checkbox"
                                                           value='all'
                                                    {...register("selectAll", { required:
                                                            {
                                                                value: true,
                                                                message:"color is required"
                                                            }
                                                    })}
                                                    />
                                                  Не важно
                                               </li>
                                                 <li>
                                                    <input type="checkbox"
                                                           value='without'
                                                           checked={selectAll}
                                                    {...register("other", { required:
                                                            {
                                                                value: true,
                                                                message:"color is required"
                                                            }
                                                    })}
                                                    />
                                                  Алматы
                                               </li>
                                                <li>
                                                    <input type="checkbox"
                                                           value='thirty'
                                                           checked={selectAll}
                                                    {...register("other", { required:
                                                            {
                                                                value: true,
                                                                message:"color is required"
                                                            }
                                                    })}/>
                                                    Нур-Султан
                                                </li>
                                                <li>
                                                    <input type="checkbox"
                                                           value='fifty'
                                                           checked={selectAll}
                                                    {...register("other", { required:
                                                            {
                                                                value: true,
                                                                message:"color is required"
                                                            }
                                                    })}/>
                                                    Караганда
                                                </li>
                                                 <li>
                                                    <input type="checkbox"
                                                           value='eighty'
                                                           checked={selectAll}
                                                    {...register("other", { required:
                                                            {
                                                                value: true,
                                                                message:"color is required"
                                                            }
                                                    })}/>
                                                    Шымкент
                                                </li>
                                                <li>
                                                    <input type="checkbox"
                                                           value='hundred'
                                                           checked={selectAll}
                                                    {...register("other", { required:
                                                            {
                                                                value: true,
                                                                message:"color is required"
                                                            }
                                                    })}/>
                                                    Атырау
                                                </li>
                                                <li>
                                                    <input type="checkbox"
                                                           value='moreHundred'
                                                           checked={selectAll}
                                                    {...register("other", { required:
                                                            {
                                                                value: true,
                                                                message:"color is required"
                                                            }
                                                    })}/>
                                                   Павлодар
                                                </li>
                                            </ul>
                                        }
                            </li>

                        </ul>
                    </nav>
                </div>

            </div>
                {currentUser.role === "recruiter" ? <Students/>  : <Vacancies/>}
            </div>
            <Footer/>
        </div>
    )
}
export default Home;