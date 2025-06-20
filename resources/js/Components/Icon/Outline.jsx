

const XIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4L12 12" stroke="#030712" strokeLinecap="round" strokeLinejoin="bevel"/>
        </svg>
    );
}

const LogOut = ({color, className, ...rest}) => {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M9.33333 5.33473V2.66806H2V13.3347H9.33333V10.6681M5.6 8.00156L14 8.00139M14 8.00139L12 6.00139M14 8.00139L12 10.0014" stroke="currentColor" strokeLinecap="square"/>
    </svg>
    );
}

const Earth = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 7.5H17M3 12.5H17M9.58333 2.5C8.17945 4.74968 7.43517 7.34822 7.43517 10C7.43517 12.6518 8.17945 15.2503 9.58333 17.5M10.4167 2.5C11.8205 4.74968 12.5648 7.34822 12.5648 10C12.5648 12.6518 11.8205 15.2503 10.4167 17.5M2.5 10C2.5 10.9849 2.69399 11.9602 3.0709 12.8701C3.44781 13.7801 4.00026 14.6069 4.6967 15.3033C5.39314 15.9997 6.21993 16.5522 7.12987 16.9291C8.03982 17.306 9.01509 17.5 10 17.5C10.9849 17.5 11.9602 17.306 12.8701 16.9291C13.7801 16.5522 14.6069 15.9997 15.3033 15.3033C15.9997 14.6069 16.5522 13.7801 16.9291 12.8701C17.306 11.9602 17.5 10.9849 17.5 10C17.5 8.01088 16.7098 6.10322 15.3033 4.6967C13.8968 3.29018 11.9891 2.5 10 2.5C8.01088 2.5 6.10322 3.29018 4.6967 4.6967C3.29018 6.10322 2.5 8.01088 2.5 10Z" stroke="#030712" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

const SidebarIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.49888 3.33203V16.6654M3.33203 3.33249L16.6655 3.33203V16.6654H3.33221L3.33203 3.33249Z" stroke="#030712" strokeLinecap="square"/>
        </svg>
    );
}

const Dashboard = ({color, className, ...rest}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1.73828" y="2.26172" width="4.66667" height="4.66667" stroke="currentColor" strokeLinecap="square"/>
            <rect x="9.75781" y="1.73828" width="4.66667" height="4.66667" transform="rotate(15 9.75781 1.73828)" stroke="currentColor" strokeLinecap="square"/>
            <rect x="1.73828" y="9.59375" width="4.66667" height="4.66667" stroke="currentColor" strokeLinecap="square"/>
            <rect x="9.07031" y="9.59375" width="4.66667" height="4.66667" stroke="currentColor" strokeLinecap="square"/>
        </svg>
    ); 
}

const EditIcon = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4.66602 4.66674H3.99935C3.64573 4.66674 3.30659 4.80721 3.05654 5.05726C2.80649 5.30731 2.66602 5.64645 2.66602 6.00007V12.0001C2.66602 12.3537 2.80649 12.6928 3.05654 12.9429C3.30659 13.1929 3.64573 13.3334 3.99935 13.3334H9.99935C10.353 13.3334 10.6921 13.1929 10.9422 12.9429C11.1922 12.6928 11.3327 12.3537 11.3327 12.0001V11.3334M10.666 3.3334L12.666 5.3334M13.5893 4.39007C13.8519 4.12751 13.9994 3.77139 13.9994 3.40007C13.9994 3.02875 13.8519 2.67264 13.5893 2.41007C13.3268 2.14751 12.9707 2 12.5993 2C12.228 2 11.8719 2.14751 11.6093 2.41007L5.99935 8.00007V10.0001H7.99935L13.5893 4.39007Z" stroke="#030712" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}


export {
    XIcon,
    LogOut,
    Earth,
    SidebarIcon,
    Dashboard,
    EditIcon,
}