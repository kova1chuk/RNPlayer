import React from 'react';
import { View, TouchableOpacity, Text, TextStyle, ViewStyle } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

interface Tab {
  label: string;
  iconName: React.ComponentProps<typeof FontAwesome>['name'];
}

interface ButtonTabsProps {
  tabs: Tab[];
  activeTab: string;
  onChangeTab: (labes: string) => void;
  tabStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const ButtonTabs: React.FC<ButtonTabsProps> = ({
  tabs,
  activeTab,
  onChangeTab,
  tabStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.container, tabStyle]}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            { backgroundColor: activeTab === tab.label ? '#eaeaea' : 'transparent' },
          ]}
          onPress={() => onChangeTab(tab.label)}
        >
          <TabBarIcon
            name={tab.iconName}
            size={24}
            color={activeTab === tab.label ? '#333' : '#999'}
          />
          <Text
            style={[
              styles.tabText,
              { color: activeTab === tab.label ? '#333' : '#999' },
              textStyle,
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size: number;
}) {
  return <FontAwesome style={{ marginBottom: -3 }} {...props} />;
}

export default ButtonTabs;
