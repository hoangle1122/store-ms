// src/components/Header.jsx - PHIÊN BẢN HOÀN CHỈNH

import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUpload } from "react-icons/fa";
import "./Header.css";
import GenreDropdown from "./GenreDropdown";

const Header = ({ isVisible }) => {
  const user = { isLoggedIn: true, isSeller: false };
  const [isGenreDropdownVisible, setGenreDropdownVisible] = useState(false);

  return (
    <header className={`header ${isVisible ? "visible" : ""}`}>
      <h1 className="header-logo">REMIX LAB</h1>
      <nav className="header-nav">
        <button className="nav-link">Khám Phá</button>
        <div
          className="nav-link-wrapper"
          onMouseEnter={() => setGenreDropdownVisible(true)}
          onMouseLeave={() => setGenreDropdownVisible(false)}
        >
          <button className="nav-link">Thể Loại</button>
          <GenreDropdown isVisible={isGenreDropdownVisible} />
        </div>
        <button className="nav-link">Nghệ Sĩ</button>
      </nav>
      <div className="header-actions">
        {user.isLoggedIn && !user.isSeller && (
          <button className="become-seller-button">Mở Gian Hàng</button>
        )}
        {user.isLoggedIn && user.isSeller && (
          <button className="upload-button">
            <FaUpload /> <span>Tải lên</span>
          </button>
        )}
        <div className="action-icons-group">
          <FaSearch className="action-icon" />
          <FaShoppingCart className="action-icon" />
        </div>
        {user.isLoggedIn ? (
          <img
            src="https://i.pravatar.cc/100?u=currentuser"
            alt="User Avatar"
            className="user-avatar"
          />
        ) : (
          <button className="login-button">Đăng Nhập</button>
        )}
      </div>
    </header>
  );
};
export default Header;
