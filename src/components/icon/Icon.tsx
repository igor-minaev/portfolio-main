import iconSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "65"} height={props.height || "48"} viewBox={props.viewBox || "0 0 65 48"} fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}></use>
        </svg>
    );
};

