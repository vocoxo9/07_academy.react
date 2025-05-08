import Input from "./input/Input";
import Logo from "./logo/Logo";

const sideMenus = [
    {type: 'button', value: '진행중', className: 'btn active'},
    {type: 'button', value: '완료', className: 'btn'},
    {type: 'button', value: '삭제', className: 'btn'},
]

export default function SideMenu() {
    return (
        <div className="side-menu">
            <Logo className="f-white" big />

            <div className="menu-btns">
                {
                    sideMenus.map((menu, index)=>(
                        <Input key={"menu_"+index} {...menu} />
                    ))
                }
            </div>
        </div>
    );
}