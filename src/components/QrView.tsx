// Copyright 2015-2020 Parity Technologies (UK) Ltd.
// Modifications Copyright (c) 2021 Thibaut Sardan

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { useEffect, useState } from 'react';
import { Dimensions, Image, View, ViewStyle } from 'react-native';
import { qrCode, qrCodeHex } from 'utils/native';

import { isHex } from '@polkadot/util';

interface Props {
	data: string;
	size?: number;
	height?: number;
	style?: ViewStyle;
	testID?: string;
}

export default function QrView(props: Props): React.ReactElement {
	const [qr, setQr] = useState('');

	useEffect((): (() => void) => {
		let promiseDisabled = false;

		async function displayQrCode(data: string): Promise<void> {
			try {
				const generatedQr = isHex(data)
					? await qrCodeHex(data)
					: await qrCode(data);

				if (promiseDisabled) return;
				setQr(generatedQr);
			} catch (e) {
				console.error(e);
			}
		}

		displayQrCode(props.data);

		return (): void => {
			promiseDisabled = true;
		};
	}, [props.data]);

	const { width: deviceWidth } = Dimensions.get('window');
	const size = props.size || deviceWidth - 64;
	const flexBasis = props.height || deviceWidth - 32;

	return (
		<View
			style={[
				{
					alignItems: 'center',
					backgroundColor: 'white',
					flexBasis,
					height: flexBasis,
					justifyContent: 'center',
					marginHorizontal: 16,
					marginVertical: 24,
					width: deviceWidth - 32
				},
				props.style
			]}
			testID={props.testID}
		>
			{qr !== '' && (
				<Image source={{ uri: qr }}
					style={{ height: size, width: size }} />
			)}
		</View>
	);
}
