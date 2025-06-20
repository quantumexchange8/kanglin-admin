import React, { useState } from "react";
import { Link, usePage, useForm } from '@inertiajs/react';
// import { ChevronDown, Dashboard, Request, CalendarIcon, Announcement, Report, Employee, Attendance, SalaryProfile, PerformanceData, Department, ProjectFolder, Tickets, SalaryIncrement, Bonus, Gift, Ranking, PointSettings, Assets, PoolFund, ExternalMember, Authority, SmartData, Setting, Activity, VersionHistory, LogOut, LogoIcon, } from "./Icon/Outline";
// import { Tag, Badge } from "antd";
import ConfirmDialog from "./ConfirmDialog";
import Button from "./Button";
import Logo from "./Icon/Logo";
import { useTranslation } from "react-i18next";
// import AccountSetting from "@/Pages/AccountSetting/AccountSetting";

export default function SideBar({user, expanded, toggleSidebar}) {
    
    const [isOpen, setIsOpen] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const { url } = usePage();
    const { t } = useTranslation();

    const { post } = useForm({}); 
    
    const confirmLogout = () => {
        setIsOpen(true);
    }

    const rejectLogout = () => {
        setIsOpen(false);
    }

    const logout = () => {
        post(route('logout'));
    };

    return (
    <>
        <div className={`${expanded ? 'fixed inset-0 z-40 bg-black/50 lg:hidden' : ''} `} onClick={toggleSidebar}></div>
        <aside className={`fixed flex flex-col inset-y-0 z-40 overflow-auto scrollbar-hide border-r border-gray-200 bg-indigo-100 
            ${!expanded ? 'translate-x-[-100%]' : 'translate-x-0 w-[230px]'}
            ease-in-out duration-300`}>
            <div className="flex items-center px-3 py-2 gap-3 border-b border-gray-200 bg-primary-100 sticky top-0 z-10 cursor-pointer"
                onClick={() => setIsAccountOpen(true)}>
                <Logo className='h-16' />
            </div>
            <div className="flex flex-col items-center px-3 py-5 gap-6 ">
                {/* General */}
                <div className="flex flex-col items-stretch self-stretch gap-2">
                    {/* <div className="sticky top-[54px] text-xxs text-gray-500 bg-gray-100"> GENERAL </div> */}
                    <div className="flex flex-col items-center gap-1 self-stretch">
                        <Link href={route('dashboard')} className="flex flex-col items-center gap-1 self-stretch">
                            <div className={`${url === '/dashboard' ?' bg-indigo-500' :' cursor-pointer hover:bg-gray-200'} flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm`}>
                                {/* <Dashboard color='currentColor' className={`${url === '/dashboard' ? 'text-white' : 'text-gray-950'}`}/> */}
                                <div className={`${url === '/dashboard' ? 'text-white text-sm' :'text-gray-950 text-sm'} max-w-[106px] w-full`}>{t('dashboard')}</div>
                            </div>
                        </Link>
                        <Link href={route('category')} className="flex flex-col items-center gap-1 self-stretch">
                            <div className={`${url === '/category' ?' bg-indigo-500' :' cursor-pointer hover:bg-gray-200'} flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm`}>
                                {/* <Dashboard color='currentColor' className={`${url === '/dashboard' ? 'text-white' : 'text-gray-950'}`}/> */}
                                <div className={`${url === '/category' ? 'text-white text-sm' :'text-gray-950 text-sm'} max-w-[106px] w-full`}>{t('category')} </div>
                            </div>
                        </Link>
                        <Link href={route('product-listing')} className="flex flex-col items-center gap-1 self-stretch">
                            <div className={`${url === '/product-listing' ?' bg-indigo-500' :' cursor-pointer hover:bg-gray-200'} flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm`}>
                                {/* <Dashboard color='currentColor' className={`${url === '/dashboard' ? 'text-white' : 'text-gray-950'}`}/> */}
                                <div className={`${url === '/product-listing' ? 'text-white text-sm' :'text-gray-950 text-sm'} max-w-[106px] w-full`}>{t('product_listing')} </div>
                            </div>
                        </Link>
                        {/* <div className={`${url === '/' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <CalendarIcon color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Calendar </div>
                        </div>
                        <Link href={route('announcement')} className="flex flex-col items-center gap-1 self-stretch">
                            <div className={`${url === '/announcement' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                                <Announcement color='currentColor' className={`${url === '/announcement' ? 'text-white' : 'text-gray-950'}`}/>
                                <div className={`${url === '/announcement' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Announcement </div>
                            </div>
                        </Link>
                        <div className={`${url === '/' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <Report color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Reports </div>
                        </div> */}
                    </div>
                </div>
                {/* Request */}
                {/* <div className="flex flex-col items-stretch self-stretch gap-2">
                    <div className="sticky top-[54px] text-xxs text-gray-500 bg-gray-100"> EMPLOYEE </div>
                    <div className="flex flex-col items-center gap-1 self-stretch">
                        <Link href={route('employee-listing')} className="flex flex-col items-center gap-1 self-stretch">
                            <div className={`${url === '/employee-listing' ? 'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                                <Employee color='currentColor' className={`${url === '/employee-listing' ? 'text-white' : 'text-gray-950'}`}/>
                                <div className={`${url === '/employee-listing' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Employee Listing </div>
                            </div>
                        </Link>
                        <div className={`${url === '/' ? 'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <Attendance color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Attendance </div>
                        </div>
                        <div className={`${url === '/' ? 'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <SalaryProfile color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Payslips </div>
                        </div>
                        <div className={`${url === '/' ? 'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <PerformanceData color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Performance Data </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch self-stretch gap-2">
                    <div className="sticky top-[54px] text-xxs text-gray-500 bg-gray-100"> DEPARTMENT </div>
                    <Link href={route('department')} className="flex flex-col items-center gap-1 self-stretch">
                        <div className={`${url === '/department' || url === '/create-department' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <Department color='currentColor' className={`${url === '/department' || url === '/create-department' ? 'text-white ' : 'text-gray-950'}`}/>
                            <div className={`${url === '/department' || url === '/create-department' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Departments </div>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col items-stretch self-stretch gap-2">
                    <div className="sticky top-[54px] text-xxs text-gray-500 bg-gray-100"> WORK </div>
                    <div className="flex flex-col items-center gap-1 self-stretch">
                    <div className={`${url === '/' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                    <ProjectFolder color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Projects </div>
                        </div>
                        <div className={`${url === '/' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <Tickets color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Tickets </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch self-stretch gap-2">
                    <div className="sticky top-[54px] text-xxs text-gray-500 bg-gray-100"> BENEFITS </div>
                    <div className="flex flex-col items-center gap-1 self-stretch">
                        <div className={`${url === '/' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <SalaryIncrement color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Salary Increment </div>
                        </div>
                        <div className={`${url === '/' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <Bonus color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Year-End Bonus </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch self-stretch gap-2">
                    <div className="sticky top-[54px] text-xxs text-gray-500 bg-gray-100"> REWARDS </div>
                    <div className="flex flex-col items-center gap-1 self-stretch">
                        <div className={`${url === '/' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <Gift color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Gifts & Redemptions </div>
                        </div>
                        <div className={`${url === '/' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <Ranking color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Billboard Rankings </div>
                        </div>
                        <div className={`${url === '/' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <PointSettings color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Point Settings </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch self-stretch gap-2">
                    <div className="sticky top-[54px] text-xxs text-gray-500 bg-gray-100"> COMPANY </div>
                    <div className="flex flex-col items-center gap-1 self-stretch">
                        <div className={`${url === '/' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <Assets color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Assets & Stocks </div>
                        </div>
                        <div className={`${url === '/' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <PoolFund color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Pooled Fund </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch self-stretch gap-2">
                    <div className="sticky top-[54px] text-xxs text-gray-500 bg-gray-100"> CONFIGURATION </div>
                    <div className="flex flex-col items-center gap-1 self-stretch">
                        <Link href={route('external-members')} className="flex flex-col items-center gap-1 self-stretch">
                            <div className={`${url === '/external-members' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                                <ExternalMember className={`${url === '/external-members' ? 'text-white' : 'text-gray-950'}`}/>
                                <div className={`${url === '/external-members' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> External Members </div>
                            </div>
                        </Link>
                        <Link href={route('administrators')} className="flex flex-col items-center gap-1 self-stretch">
                            <div className={`${url === '/administrators' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                                <Authority className={`${url === '/administrators' ? 'text-white' : 'text-gray-950'}`}/>
                                <div className={`${url === '/administrators' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Administrators </div>
                            </div>
                        </Link>
                        <Link href={route('smart-data')} className="flex flex-col items-center gap-1 self-stretch">
                            <div className={`${url === '/smart-data' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                                <SmartData className={`${url === '/smart-data' ? 'text-white' : 'text-gray-950'}`}/>
                                <div className={`${url === '/smart-data' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Smart Data </div>
                            </div>
                        </Link>
                        <div className={`${url === '/' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <Setting color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Settings </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch self-stretch gap-2">
                    <div className="sticky top-[54px] text-xxs text-gray-500 bg-gray-100"> SYSTEM </div>
                        <div className="flex flex-col items-center gap-1 self-stretch">
                        <div className={`${url === '/' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <Activity color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Activity Log </div>
                        </div>
                        <div className={`${url === '/' ?'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm bg-gray-950' :'flex items-center px-3 py-1.5 gap-3 self-stretch rounded-sm cursor-pointer hover:bg-gray-200'}`}>
                            <VersionHistory color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className={`${url === '/' ? 'text-white text-sm' :'text-gray-950 text-sm'}`}> Version History </div>
                        </div>
                        <div className="flex items-center px-3 py-1.5 gap-3 self-stretch cursor-pointer hover:bg-gray-200" onClick={confirmLogout}>
                            <LogOut color='currentColor' className={`${url === '/' ? 'text-white' : 'text-gray-950'}`}/>
                            <div className="text-gray-950 text-sm"> Log Out </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </aside>

        <ConfirmDialog
            show={isOpen}
        >
            <div className="p-6 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <div className="text-lg font-bold text-gray-950 text-center">Confirm Logout?</div>
                </div>
                <div className="flex justify-center gap-4">
                    <Button variant="outlined" size="sm" onClick={rejectLogout}>Cancel</Button>
                    <Button size="sm" onClick={logout}>Confirm</Button>
                </div>
            </div>
        </ConfirmDialog>

        {/* <AccountSetting
            show={isAccountOpen}
            onClose={() => setIsAccountOpen(false)}
            user={user}
        /> */}
    </>
    )
}

