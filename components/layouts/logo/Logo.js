import styles from "./Logo.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Link from "next/link";

const Logo = (props) => {
  dayjs.extend(utc);
  dayjs.extend(timezone); // needs utc
  const [currTime, setCurrTime] = useState(
    dayjs().tz("America/New_York").format("MM/DD/YYYY, h:mma")
  );
  const { showTime = false } = props;

  // auto refreshes every second to display time in new york
  useEffect(() => {
    setInterval(() => {
      setCurrTime(dayjs().tz("America/New_York").format("MM/DD/YYYY, h:mma"));
    }, 1000);
  }, [currTime]);

  return (
    <hgroup className={styles.header}>
      <Link href="/">
        <a>
          <Image
            className={styles.logo}
            src="/images/logo-supreme-large.jpg"
            width={150}
            height={45}
            alt="supreme box logo"
          />
        </a>
      </Link>

      {showTime && (
        <time data-timezone-offset="-14400">
          {currTime}
          <span id="time-zone-name"> NYC</span>
        </time>
      )}
    </hgroup>
  );
};

export default Logo;
