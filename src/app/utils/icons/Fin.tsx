import React from 'react'

interface IFinIcon {
  width: number
  height: number
}

export const FinIcon = ({ width, height }: IFinIcon): React.ReactElement => (
  <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2.66668C0 1.19391 1.1939 0 2.66665 0H13.3334C14.8061 0 16 1.19391 16 2.66668V13.3333C16 14.8061 14.8061 16 13.3334 16H2.66665C1.1939 16 0 14.8061 0 13.3333V2.66668ZM7.96722 2.18877C8.33541 2.18877 8.63388 2.48724 8.63388 2.85544L8.63388 8.40705C8.63388 8.77524 8.33541 9.07372 7.96722 9.07372C7.59903 9.07372 7.30055 8.77524 7.30055 8.40705V2.85544C7.30055 2.48724 7.59903 2.18877 7.96722 2.18877ZM5.07725 3.07814C5.44544 3.07814 5.74392 3.37662 5.74392 3.74481V7.74481C5.74392 8.11301 5.44544 8.41148 5.07725 8.41148C4.70907 8.41148 4.41059 8.11301 4.41059 7.74481V3.74481C4.41059 3.37662 4.70907 3.07814 5.07725 3.07814ZM10.856 3.07814C11.2242 3.07814 11.5227 3.37662 11.5227 3.74481V7.74481C11.5227 8.11301 11.2242 8.41148 10.856 8.41148C10.4878 8.41148 10.1893 8.11301 10.1893 7.74481V3.74481C10.1893 3.37662 10.4878 3.07814 10.856 3.07814ZM5.56909 10.5054C7.16237 10.7452 8.78255 10.7452 10.3758 10.5054C10.8535 10.4335 11.2168 10.9271 11.0128 11.3649C9.81443 13.9364 6.13049 13.9364 4.93214 11.3649C4.72809 10.9271 5.0914 10.4335 5.56909 10.5054Z"
    />
  </svg>
)