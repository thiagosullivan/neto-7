import React from 'react';
import Image from 'next/image';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import NetoHistory from '../../assets/neto-recorte-3.png';
import { HistoryContainer } from './style';
// import 'react-tabs/style/react-tabs.css';

function History() {
  return (
    <HistoryContainer>
        <div className='history__colOne'>
          <Image src={NetoHistory}/>
        </div>
        <div className='history__colTwo'>
          <Tabs>
            <TabList>
              <Tab>2018</Tab>
              <Tab>2019</Tab>
              <Tab>2020</Tab>
              <Tab>2021</Tab>
              <Tab>2022</Tab>
            </TabList>

            <TabPanel>
              <p>Suspendisse non tempor nibh, sed ultricies ipsum. Nullam scelerisque felis et eros fermentum, a hendrerit lacus porta. Mauris sit amet magna posuere, maximus nibh a, finibus libero. Morbi aliquam hendrerit erat, ac vehicula est mollis et. In hac habitasse platea dictumst. Quisque lectus est, placerat eget purus sed, suscipit malesuada sem. Donec quis leo congue, interdum lorem ultrices, tristique erat. Cras pharetra in sapien ac tincidunt. Sed eu eros nec dui hendrerit tincidunt nec id tortor. Suspendisse vel lectus at ante dictum pellentesque. Ut aliquam libero nec metus congue, at posuere justo ultrices. Duis a ullamcorper risus. Maecenas neque metus, pellentesque sit amet urna vitae, porttitor suscipit ipsum. Mauris a scelerisque dui. Quisque ut elementum ipsum. Suspendisse cursus pellentesque volutpat. Mauris sodales odio sit amet lacus scelerisque sagittis. Sed hendrerit, dolor non pretium bibendum, quam risus lacinia velit, sit amet auctor nisi felis mollis lacus. Donec sed rutrum nisi.</p>
              <ul>
                <li>Sed hendrerit</li>
                <li>dolor non pretium bibendum</li>
                <li>quam risus lacinia velit</li>
                <li>sit amet auctor nisi felis mollis lacus</li>
              </ul>
            </TabPanel>
            <TabPanel>
              <p>Integer convallis viverra ultricies. Sed aliquam, arcu eu congue fringilla, odio massa pulvinar est, non placerat magna dolor non neque. Donec faucibus faucibus rutrum. Duis imperdiet ultricies porttitor. Suspendisse tincidunt felis eu pellentesque pulvinar. Etiam laoreet magna lacinia cursus pretium. Curabitur sollicitudin pharetra sem, ut ultrices lectus pretium ac. Morbi malesuada condimentum ante, quis gravida sapien consectetur a.
              Morbi hendrerit felis leo, eu ornare est bibendum nec. Etiam congue blandit arcu, a vulputate mauris auctor elementum. Vestibulum vehicula id risus id ullamcorper. Nunc eget odio pharetra, semper lectus eget, vehicula dui. Vestibulum id dolor dapibus, pretium eros finibus, euismod lacus. Integer id ex eros. Vestibulum tempor nunc at luctus eleifend. Integer ac diam cursus, eleifend augue non, lobortis orci. Suspendisse porta mi et lorem pulvinar laoreet ac id nisi. Sed feugiat sapien vitae ligula cursus, non sodales augue dignissim. Duis est purus, pellentesque quis nunc ut, feugiat egestas arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec maximus pellentesque pretium. Proin finibus mattis purus, et dapibus ligula tristique interdum. Praesent lacinia ipsum sit amet ultricies pulvinar. Nam sed rutrum lacus, fermentum sodales lectus. Suspendisse bibendum neque ipsum. Aenean ut maximus tortor. Fusce varius tincidunt libero sit amet porttitor. Mauris id finibus eros, sed ornare orci. Morbi lectus sapien, porttitor quis quam ac, facilisis volutpat nibh. Praesent at risus dapibus, porta odio at, fringilla nisi. Praesent accumsan vulputate justo, at pellentesque tortor. Aenean et erat nulla.</p>
            </TabPanel>
            <TabPanel>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin porta vulputate nunc porta vulputate. Vivamus urna est, semper quis sem vel, bibendum consectetur tortor. Maecenas pellentesque elit nec est placerat, vitae porttitor metus tincidunt. Nullam tortor metus, mollis ut pharetra eget, pulvinar quis turpis. Nunc a nibh felis. Aliquam aliquam lectus vel ante luctus, sed elementum nibh malesuada. Maecenas imperdiet purus vel auctor accumsan.
              Aliquam quis nulla eu augue convallis aliquam. Mauris volutpat, ipsum ultricies efficitur dignissim, quam velit venenatis nisl, sollicitudin ultricies massa lectus non velit. In justo lacus, suscipit non consequat quis, tincidunt in sapien. Nam ultrices vitae lectus in convallis. Vivamus elementum turpis eget elit dictum pulvinar. Nam vitae tempor ante, at lobortis sem. Donec maximus ligula id diam placerat malesuada a eu diam. Quisque in tincidunt urna. Sed sed nisl lacus. Curabitur porta pretium neque in dictum. Nulla sit amet egestas nisi. Etiam feugiat hendrerit nunc, nec elementum augue volutpat rutrum. Aliquam magna lectus, bibendum ac mauris in, feugiat porta augue.</p>
            </TabPanel>
            <TabPanel>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin porta vulputate nunc porta vulputate. Vivamus urna est, semper quis sem vel, bibendum consectetur tortor. Maecenas pellentesque elit nec est placerat, vitae porttitor metus tincidunt. Nullam tortor metus, mollis ut pharetra eget, pulvinar quis turpis. Nunc a nibh felis. Aliquam aliquam lectus vel ante luctus, sed elementum nibh malesuada. Maecenas imperdiet purus vel auctor accumsan.</p>
            </TabPanel>
            <TabPanel>
              <p>Integer convallis viverra ultricies. Sed aliquam, arcu eu congue fringilla, odio massa pulvinar est, non placerat magna dolor non neque. Donec faucibus faucibus rutrum. Duis imperdiet ultricies porttitor. Suspendisse tincidunt felis eu pellentesque pulvinar. Etiam laoreet magna lacinia cursus pretium. Curabitur sollicitudin pharetra sem, ut ultrices lectus pretium ac. Morbi malesuada condimentum ante, quis gravida sapien consectetur a.</p>
            </TabPanel>
          </Tabs>
        </div>
    </HistoryContainer>
  )
}

export default History