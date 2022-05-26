import React,{useState} from "react";
import Vacancies from "../Vacancies/Vacancies";
import "./Home.css"
import logo from "../images/logo-form.png";
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






    return (
        <div className="homePage">
            <div className="sidebar_name">
               <div className="sidebar_img">
                   <img src={logo}/>
               </div>
                <div className="sidebar_search">

                </div>
                <div className="sidebar_filter">
                    <nav className="sidebar_menu">
                        <ul className="sidebar_menu_list">
                            <li>
                                <a onClick={()=> setShow(!show)} className="sidebar-link">
                                    Специальность
                                    {
                                        show ?
                                        <img className="sidebar_arrow" src={arrow}/>:
                                        <img className="sidebar_arrow" src={arrowRight}/>
                                    }

                                </a>
                                {
                                    show &&
                                    <ul className="sidebar_submenu">
                                    <li>
                                        <div className="submenu_checkbox_list">
                                            <input type="checkbox"/>
                                            <div>
                                                Информационные технологии
                                                {
                                            show2 ?
                                        <img onClick={()=> setShow2(!show2)} className="sidebar_arrow" src={arrow}/>:
                                        <img onClick={()=> setShow2(!show2)} className="sidebar_arrow" src={arrowRight}/>
                                    }
                                            </div>
                                        </div>
                                        {
                                            show2 &&
                                            <ul className="sub-submenu-list">
                                               <li>
                                                    <input type="checkbox"/>
                                                  Аналитик
                                               </li>
                                                 <li>
                                                    <input type="checkbox"/>
                                                    Дизайнер
                                               </li>
                                                <li>
                                                    <input type="checkbox"/>
                                                    Менеджер продукта
                                                </li>
                                                <li>
                                                    <input type="checkbox"/>
                                                    Программист
                                                </li>
                                                 <li>
                                                    <input type="checkbox"/>
                                                    Сетевой инженер
                                                </li>
                                                <li>
                                                    <input type="checkbox"/>
                                                    Системный Администратор
                                                </li>
                                                <li>
                                                    <input type="checkbox"/>
                                                    Специалист технической поддержки
                                                </li>
                                                 <li>
                                                    <input type="checkbox"/>
                                                    Тестировщик
                                                </li>
                                            </ul>
                                        }

                                    </li>


                                </ul>
                                }
                            </li>
                            <li>
                                <a onClick={()=> setShow3(!show3)} className="sidebar-link">
                                    График
                                     {
                                        show3 ?
                                        <img className="sidebar_arrow" src={arrow}/>:
                                        <img className="sidebar_arrow" src={arrowRight}/>
                                    }
                                </a>
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
                                    Зарплата
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
                                                   Не оплачиваемые стажировки
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
                                                    от 30тыс
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
                                                    от 50 тыс
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
                                                    от 80 тыс
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
                                                    от 100 тыс
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
                                                    от 150 тыс
                                                </li>
                                                <li>
                                                    <input type="checkbox"
                                                           value="otherVariant"
                                                           checked={selectAll}
                                                    {...register("other", { required:
                                                            {
                                                                value: true,
                                                                message:"color is required"
                                                            }
                                                    })}/>
                                                    Свой вариант:
                                                    <input className="sidebar_salary_number" type="number"/>
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