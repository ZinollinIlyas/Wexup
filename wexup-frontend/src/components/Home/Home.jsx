import React,{useState} from "react";
import Vacancies from "../Vacancies/Vacancies";
import "./Home.css"
import arrow from "../images/Arrow 1.svg";
import arrowRight from "../images/ArrowRight.svg";
import {useForm} from "react-hook-form";
const Home = () => {
    const [show,setShow] = useState(false);
    const [show2,setShow2] = useState(false);
    const [show3,setShow3] = useState(false);
    const [show4,setShow4] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const selectAll = watch('selectAll');
    const [value,setValue] = useState('')

    return (
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
            <Vacancies/>
        </div>
    )
}
export default Home;