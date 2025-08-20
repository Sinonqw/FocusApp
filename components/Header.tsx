'use client'

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// Импортируем иконки гамбургера и крестика
import { FaBars, FaTimes } from 'react-icons/fa';

const menuBtns = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  // 1. Создаем состояние для меню. Изначально оно закрыто (false).
  const [isOpen, setIsOpen] = useState(false);
  
  // 2. Используем useRef для получения ссылки на DOM-элемент header.
  // Это нужно для того, чтобы закрывать меню при клике вне его.
  const menuRef = useRef<HTMLDivElement>(null);

  // Функция, которая переключает состояние меню.
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Функция, которая просто закрывает меню.
  const closeMenu = () => {
    setIsOpen(false);
  };

  // 3. Используем useEffect для добавления/удаления обработчика кликов.
  useEffect(() => {
    // Эта функция проверяет, был ли клик вне меню.
    const handleClickOutside = (event: MouseEvent) => {
      // Если у нас есть ссылка на меню и клик был не по самому меню или его элементам.
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu(); // Закрываем меню.
      }
    };

    // Если меню открыто, добавляем обработчик события 'mousedown' на весь документ.
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Если меню закрыто, удаляем обработчик, чтобы не тратить ресурсы.
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Эта функция-очиститель (clean-up) будет вызвана при размонтировании компонента
    // или при изменении isOpen, чтобы всегда удалять обработчик.
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); // Зависимость: эффект запускается только при изменении isOpen.

  return (
    // Привязываем ref к нашему header-компоненту.
    <header className="header z-100 py-4" ref={menuRef}>
      <Link href={"#"} onClick={closeMenu}>
        <Image
          className="logo"
          src={"/logo.svg"}
          width={100}
          height={30}
          alt="FocusApp"
        />
      </Link>
      
      {/* 4. Кнопка для гамбургер-меню */}
      <button className="menu-toggle-btn" onClick={toggleMenu}>
        {/* В зависимости от состояния isOpen, показываем либо иконку крестика, либо гамбургера */}
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* 5. Основная навигация */}
      {/* Добавляем класс 'open' если isOpen === true */}
      <nav className={`header__nav ${isOpen ? "open" : ""}`}>
        <ul className="header__nav-list">
          {menuBtns.map((btn) => (
            <li
              key={btn.name}
              className="header-menu__item"
              onClick={(e) => {
                e.preventDefault();
                // Закрываем меню при клике на пункт
                closeMenu();
                if (btn.href === "#home") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  const el = document.querySelector(btn.href);
                  el?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {btn.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;