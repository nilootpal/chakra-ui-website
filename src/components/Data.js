import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { HiOutlineLightBulb } from 'react-icons/hi'

export const Data = {
    traffic: {
        select: ['Source', 'City'],
        values: {
            Google: 30000,
            Twitter: 20000,
            Facebook: 10000,
            LinkedIn: 5000,
            Youtube: 3000,
            Other: 2000 
        },
        total: 70000,
        button: 'See traffic sources'
    },
    signUpLocation: {
        select: ['Country', 'City'],
        values: {
            'United States': 30000,
            Germany: 20000,
            Netherlands: 10000,
            India: 5000,
            Japan: 3000,
            Other: 2000 
        },
        total: 70000,
        button: 'See all Countries'
    },
    behaviour: {
        select: ['Browsers', 'Decides'],
        values: {
            'United States': 30000,
            Germany: 20000,
            Netherlands: 10000,
            India: 5000,
            Japan: 3000,
            Other: 2000 
        },
        total: 70000,
        button: 'See all Countries'
    }
}

export const UserData = [
    {
        email: 'paula.suarze@google.com',
        friends: 6500,
        country: 'USA'
    },
    {
        email: 'laura.kenet@yahoo.com',
        friends: 2300,
        country: 'Monaco'
    },
    {
        email: 'aaron.michael@arg.org',
        friends: 1200,
        country: 'Prague'
    },
    {
        email: 'jeremy.runner@aol.com',
        friends: 1200,
        country: 'China'
    },
]

export const Summaries = [
    {
        icon: AiOutlineCaretDown,
        color: '#FF3131',
        bold: 'Signups are slowing down',
        text: '-5% new than last week'
    },
    {
        icon: AiOutlineCaretUp,
        color: '#39FF14',
        bold: '80%',
        text: 'of your signups were invited by other members'
    },
    {
        icon: HiOutlineLightBulb,
        color: '#fc9862',
        bold: '80%',
        text: 'of your signups were invited by a friend'
    },
    {
        icon: HiOutlineLightBulb,
        color: '#fc9862',
        bold: '80%',
        text: 'of your signups were invited by a friend'
    },
]

export const generateExponentialSignUps = (startDate, endDate, maxSignUps) => {
    const dateArray = [];
    const days = (endDate - startDate) / (24 * 60 * 60 * 1000); 
  
    for (let i = 0; i <= days; i++) {
      const currentDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
      const exponentialSignUps = Math.floor((maxSignUps - 1) * (i / days) ** 2) + 1;
  
      dateArray.push({
        date: currentDate,
        numberOfSignUps: exponentialSignUps
      });
    }
  
    return dateArray;
}
