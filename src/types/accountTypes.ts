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

export type UnlockedAccount = {
	address: string;
	createdAt: number;
	derivationPassword: string;
	derivationPath: string; // doesn't contain the ///password
	encryptedSeed: string;
	isLegacy?: boolean;
	name: string;
	networkKey: string;
	recovered?: boolean;
	seed: string; //this is the SURI (seedPhrase + /soft//hard///password derivation)
	seedPhrase: string; //contains only the BIP39 words, no derivation path
	updatedAt: number;
	validBip39Seed: boolean;
};

export type LockedAccount = Omit<
	UnlockedAccount,
	'seedPhrase' | 'seed' | 'derivationPassword' | 'derivationPath'
>;

export type Account = UnlockedAccount | LockedAccount | AccountType;

export function isUnlockedAccount(account: UnlockedAccount | LockedAccount): account is UnlockedAccount {
	return 'seed' in account || 'seedPhrase' in account;
}

export type AccountMeta = {
	address: string;
	createdAt: number;
	hasPassword?: boolean;
	name: string;
	updatedAt: number;
	networkPathId?: string;
};

export interface FoundIdentityAccount extends AccountMeta {
	accountId: string;
	encryptedSeed: string;
	hasPassword: boolean;
	validBip39Seed: true;
	isLegacy?: boolean;
	networkKey: string;
	path: string;
}

export interface AccountType {
	address: string;
	createdAt: number;
	derivationPassword?: string;
	derivationPath?: string; // doesn't contain the ///password
	encryptedSeed: string;
	hasPassword? : boolean;
	isLegacy?: boolean;
	name: string;
	networkKey: string;
	path?: string;
	seed?: string; //this is the SURI (seedPhrase + /soft//hard///password derivation)
	seedPhrase?: string; //contains only the BIP39 words, no derivation path
	updatedAt: number;
	validBip39Seed: boolean;
	version?: number;
}

export type SerializedIdentity = {
	encryptedSeed: string;
	derivationPassword: string;
	meta: Array<[string, AccountMeta]>;
	addresses: Array<[string, string]>;
	name: string;
};

export interface AccountInfo {
	address: string;
	accountId: string;
	createdAt: number;
	name: string;
	updatedAt: number;
	encryptedSeed: string;
	validBip39Seed: boolean;
	isLegacy?: boolean;
	networkKey: string;
	path?: string;
};

export type PathGroup = {
	paths: string[];
	title: string;
};
