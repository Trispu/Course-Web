import {
  CaretDownOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        
        <Link to={'/'}><ul className="hehe">
          <ul className="world">
            <li className="word1">U</li>
            <li className="word2">nica</li>
          </ul>
          <li>
            <CaretDownOutlined />
          </li>
          <li className="search">
            <input type="text" placeholder="Tìm kiếm khóa học" />
            <SearchOutlined className="search-icon" />
          </li>
        </ul></Link>
      </div>
      <div className="header__right">
        <ul>
          <li>Doanh nghiệp</li>
          <li>Hội viên</li>
          <li className="shop-icon">
            <Link to={"/cou"}>
              <ShoppingCartOutlined />
            </Link>
          </li>
          <li className="user-icon">
            <UserOutlined />
          </li>
          <li>
            <img
              src="https://unica.vn/icon/language/vi.png"
              alt=""
              width={35}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
